'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*global Do, $, initDonatePush, shani, autosize, QRCode */

Do(function () {
    function getCookie(name) {
        var cookie = document.cookie.split(';').reduce(function (acc, cur) {
            var _cur$split = cur.split('=');

            var _cur$split2 = _slicedToArray(_cur$split, 2);

            var k = _cur$split2[0];
            var v = _cur$split2[1];

            return _extends({}, acc, _defineProperty({}, k.trim(), v.trim()));
        }, {});
        return cookie[name];
    }
    function beforeSend(xhr) {
        xhr.setRequestHeader('X-CSRF-TOKEN', getCookie('ck'));
        xhr.withCredentials = cors;
    }
    function noop() {}
    var cors = location.hostname.indexOf('dae') >= 0 && location.pathname !== '/donate';
    var animationEndEvent = getAnimationEndEvent();
    var transitionEndEvent = getTransitionEndEvent();
    if (cors) {
        $.support.cors = cors;
    }
    if (!window.__dbDonateState) {
        window.__dbDonateState = {};
    }
    var state = window.__dbDonateState;
    var $W = $(window);
    var $D = $(document);
    var $body = $('body');
    var on = $D.delegate.bind($D);
    /* eslint-disable no-unused-vars, no-console */
    var l = console.log.bind(console);
    var CHANNELS = {
        UNSELECTED: 0,
        ALIPAY: 1,
        WECHAT: 2,
        BALANCE: 3
    };
    var STEPS = {
        SELECT_MONEY: 0,
        SELECT_CHANNEL: 1,
        WAITING_FOR_ALIPAY: 2,
        WAITING_FOR_TENPAY: 3,
        WAITING_FOR_BALANCE: 4,
        PAY_FAILURE: 5,
        PAY_SUCCESS: 6
    };
    var STATUSES = {
        PENDING: 0,
        SUCCESS: 1,
        FAILURE: 2
    };

    var EventBus = function () {
        function EventBus() {
            _classCallCheck(this, EventBus);

            this.handlers = {};
        }

        _createClass(EventBus, [{
            key: 'on',
            value: function on(event, handler) {
                var handlers = this.handlers[event];
                if (handlers === void 0) {
                    handlers = this.handlers[event] = [];
                }
                handlers.push(handler);
            }
        }, {
            key: 'emit',
            value: function emit(event) {
                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                var handlers = this.handlers[event];
                if (handlers === void 0) {
                    return;
                }
                handlers.forEach(function (handler) {
                    handler.apply(undefined, args);
                });
            }
        }]);

        return EventBus;
    }();

    var bus = new EventBus();

    var listenOrderStatus = function () {
        var listenedId = void 0;
        return function (orderId) {
            if (listenedId === orderId) {
                return;
            }
            listenedId = orderId;
            initDonatePush(orderId, function (jsn) {
                bus.emit('status:' + jsn.status, jsn);
            });
        };
    }();

    function updateState() {
        var newState = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        var _state$order = state.order;
        var order = _state$order === undefined ? {} : _state$order;
        var _newState$newOrder = newState.newOrder;
        var newOrder = _newState$newOrder === undefined ? {} : _newState$newOrder;

        if (newOrder.id && newOrder.channel !== CHANNELS.BALANCE) {
            if (+order.id !== +newOrder.id || order.channel === CHANNELS.BALANCE) {
                listenOrderStatus(newOrder.id);
            }
        }
        Object.getOwnPropertyNames(newState).forEach(function (k) {
            state[k] = newState[k];
        });
    }

    function getCurrentStep() {
        if (!state.step) {
            state.step = 0;
        }
        return state.step;
    }

    function openURL(url) {
        window.open().location.href = url;
    }

    function makeURL(u) {
        var protocol = arguments.length <= 1 || arguments[1] === undefined ? location.protocol : arguments[1];

        var host = cors ? 'donate.douban.com' : location.host;
        return protocol + '//' + host + u;
    }

    function getStepTpl(s) {
        var $e = $('#tpl-donate-step' + s);
        return $e.html();
    }

    var render = function () {
        var renders = {};
        return function (step) {
            var render = renders[step];
            if (!render) {
                render = renders[step] = shani.compile(getStepTpl(step));
            }
            return render({ state: state });
        };
    }();

    var popup = {
        isShow: false,

        _close: function _close() {
            if (!this.isShow) {
                return;
            }
            var $layer = $('.donate-popup-layer');
            var $wrapper = $layer.find('.donate-popup-wrapper');
            $wrapper.removeClass('donate-popup-open-animate').addClass('donate-popup-close-animate');
            var close = function close() {
                $wrapper.removeClass('donate-popup-close-animate');
                $layer.hide();
            };
            if (animationEndEvent) {
                $wrapper.one(animationEndEvent, close);
            } else {
                close();
            }
            this.isShow = false;
        },
        clear: function clear() {
            this._close();
            this.$layer = void 0;
        },
        close: function close() {
            this._close();
        },
        open: function open(_ref) {
            var html = _ref.html;
            var title = _ref.title;
            var cb = _ref.cb;

            if (!title) {
                title = '给 ' + state.author.name + ' 赞赏 · · · · · ·';
            }
            if (this.$layer) {
                this.$layer.hide();
                this.isShow = false;
                this.$layer.find('.donate-popup-wrapper').removeAttr('moved');
            } else {
                this.$layer = $('<div class="donate-popup-layer">\n                        <div class="donate-popup-bg"></div>\n                        <div class="donate-popup-wrapper">\n                            <div class="donate-popup-header">\n                                <div class="donate-popup-title"></div>\n                                <div class="donate-popup-close">✕</div>\n                            </div>\n                            <div class="donate-popup-content"></div>\n                        </div>\n                    </div>');
            }
            this.replace({ html: html, title: title, cb: cb });
            this.adjust({ cb: cb });
            this.bindEvents();
        },
        replace: function replace(_ref2) {
            var html = _ref2.html;
            var title = _ref2.title;
            var cb = _ref2.cb;

            if (!title) {
                title = '给 ' + state.author.name + ' 赞赏 · · · · · ·';
            }
            if (!this.$layer) {
                this.open({ html: html, title: title, cb: cb });
                return;
            }
            this.$layer.find('.donate-popup-content').html(html);
            this.$layer.find('.donate-popup-title').text(title);
        },
        adjust: function adjust() {
            var _ref3 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            var _ref3$cb = _ref3.cb;
            var cb = _ref3$cb === undefined ? noop : _ref3$cb;

            var $layer = this.$layer;
            var $wrapper = $layer.find('.donate-popup-wrapper');
            $wrapper.removeClass('donate-popup-open-animate').removeClass('donate-popup-close-animate');
            $body.append($layer);
            $layer.show().css({
                visibility: 'hide'
            });
            if (!$wrapper.attr('moved')) {
                var w = $wrapper.outerWidth();
                var h = $wrapper.outerHeight();
                var top = ($W.height() - h) / 2;
                var left = ($W.width() - w) / 2;
                top = top < 0 ? 0 : top;
                $wrapper.css({ top: top, left: left });
            }
            $layer.css({
                visibility: 'visible',
                zIndex: 9999
            });
            if (!this.isShow) {
                $wrapper.addClass('donate-popup-open-animate').one(animationEndEvent, cb);
            } else {
                cb();
            }
            this.isShow = true;
        },
        bindEvents: function bindEvents() {
            var $ta = $('.donate-comment textarea');
            autosize($ta);
            $ta.bind('paste keydown', function (e) {
                var type = e.type;

                if ([8, 39, 37].indexOf(e.keyCode) >= 0) {
                    return;
                }
                if (e.keyCode === 13) {
                    e.preventDefault();
                    return;
                }
                var v = $ta.val();
                var l = v.length;
                var text = type === 'paste' ? e.originalEvent.clipboardData.getData('text') : '';
                if (l + text.length >= 50) {
                    e.preventDefault();
                }
            });
        }
    };

    function setV(k, v) {
        var $form = $('.donate-submit-form');
        var $ipt = $form.find('[name=' + k + ']');
        if ($ipt.is('[type=checkbox]')) {
            $ipt.attr('checked', v);
        } else {
            $ipt.val(v);
        }
    }

    function getV(k) {
        var $form = $('.donate-submit-form');
        var $ipt = $form.find('[name=' + k + ']');
        if ($ipt.is('[type=checkbox]')) {
            return $ipt.is(':checked');
        }
        return $ipt.val();
    }

    function checkForm() {
        var $form = $('.donate-submit-form');
        var $ipts = $form.find('input');
        var names = $ipts.filter(function (_, e) {
            var $this = $(e);
            var v = $this.val();
            if ($this.attr('required') && !v) {
                return true;
            }
            if ($this.attr('name') === 'money') {
                v = parseFloat(v);
                if (isNaN(v)) {
                    return true;
                }
            }
            return false;
        }).map(function (_, e) {
            return $(e).attr('name');
        }).get();
        return names;
    }

    function getFormData() {
        var $form = $('.donate-submit-form');
        var d = $form.serializeArray();
        return d.reduce(function (acc, x) {
            acc[x.name] = x.value;
            return acc;
        }, {});
    }

    function submitForm(cb) {
        var processData = arguments.length <= 1 || arguments[1] === undefined ? function (x) {
            return x;
        } : arguments[1];
        var after = arguments.length <= 2 || arguments[2] === undefined ? function () {} : arguments[2];

        var $form = $('.donate-submit-form');
        var names = checkForm();
        var m = {
            money: '金额'
        };
        if (names.length) {
            alert(m[names[0]] + '填写错误！');
            after();
            return;
        }
        var data = getFormData();
        processData(data);
        var type = ($form.attr('method') || 'post').toUpperCase();
        var url = makeURL($form.attr('action'));
        $.ajax({
            type: type,
            url: url,
            data: data,
            beforeSend: beforeSend,
            success: function success(jsn) {
                after();
                cb(jsn);
            },
            xhrFields: {
                withCredentials: cors
            },
            crossDomain: cors
        });
    }

    function btnClick(_ref4) {
        var selector = _ref4.selector;
        var cb = _ref4.cb;
        var _ref4$processData = _ref4.processData;
        var processData = _ref4$processData === undefined ? function (x) {
            return x;
        } : _ref4$processData;
        var failure = _ref4.failure;

        on(selector, 'click', function () {
            var _this = this;

            var $this = $(this);
            if ($this.attr('disabled')) {
                return;
            }
            $this.attr('disabled', true);
            submitForm(function (jsn) {
                var r = jsn.r;
                if (r !== 0) {
                    if (failure) {
                        failure.call(_this, jsn.message, jsn.res);
                    } else {
                        alert(jsn.message);
                    }
                    return;
                }
                cb(jsn.res);
            }, processData.bind(this), function () {
                $this.removeAttr('disabled');
            });
        });
    }

    function dispatchChannel(order, url) {
        switch (order.channel) {
            case CHANNELS.UNSELECTED:
                dispatchStep(STEPS.SELECT_CHANNEL);
                break;
            case CHANNELS.ALIPAY:
                dispatchStep(STEPS.WAITING_FOR_ALIPAY);
                break;
            case CHANNELS.BALANCE:
                dispatchStep(STEPS.WAITING_FOR_BALANCE);
                break;
            case CHANNELS.WECHAT:
                dispatchStep(STEPS.WAITING_FOR_TENPAY);
                break;
        }
    }

    function makeStepKey(step) {
        return 'step:' + step;
    }

    function dispatchStep(step) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
        }

        bus.emit.apply(bus, [makeStepKey(step)].concat(args));
    }

    bus.on('status:success', function (_ref5) {
        var data = _ref5.data;

        // 余额付款的时候可以直接成功，不需要 sse 监听订单状态，所以这里需要判断一下，thx QA，嘻嘻
        if (!state.order) {
            return;
        }
        var donate_count = data.donate_count;

        updateState({
            donate_count: donate_count
        });
        dispatchStep(STEPS.PAY_SUCCESS);
    });

    bus.on('status:failure', function (_ref6) {
        var message = _ref6.message;

        dispatchStep(STEPS.PAY_FAILURE, message);
    });

    bus.on('status:timeout', function () {
        alert('支付超时');
    });

    bus.on(makeStepKey(STEPS.SELECT_MONEY), function () {
        popup.open({
            html: render(STEPS.SELECT_MONEY),
            cb: function cb() {
                var $selected = $('.donate-money._selected');
                onDonateMoneyHover.call($selected.eq(0), { type: 'mouseenter' });
                $selected.trigger('click');
            }
        });
    });

    bus.on(makeStepKey(STEPS.SELECT_CHANNEL), function () {
        popup.replace({ html: render(STEPS.SELECT_CHANNEL) });
        popup.adjust();
    });

    bus.on(makeStepKey(STEPS.WAITING_FOR_ALIPAY), function () {
        listenOrderStatus(state.order.id);
        popup.replace({ html: render(STEPS.WAITING_FOR_ALIPAY) });
        popup.adjust();
    });

    bus.on(makeStepKey(STEPS.WAITING_FOR_TENPAY), function () {
        listenOrderStatus(state.order.id);
        popup.replace({ html: render(STEPS.WAITING_FOR_TENPAY) });
        popup.adjust();
        var $qr = $('.donate-tenpay-qrcode');
        var qrParams = {
            text: $qr.data('src'),
            width: 160,
            height: 160
        };
        new QRCode($('#' + $qr.data('id'))[0], qrParams);
        popup.adjust();
    });

    bus.on(makeStepKey(STEPS.WAITING_FOR_BALANCE), function () {
        dispatchStep(STEPS.PAY_SUCCESS);
    });

    bus.on(makeStepKey(STEPS.PAY_FAILURE), function (message) {
        updateState({ message: message });
        popup.replace({ html: render(STEPS.PAY_FAILURE) });
        popup.adjust();
    });

    bus.on(makeStepKey(STEPS.PAY_SUCCESS), function () {
        if (popup.isShow) {
            popup.replace({ html: render(STEPS.PAY_SUCCESS) });
            popup.adjust();
        }
        var $count = $('.js-donate-count');
        var $countWrapper = $('.js-donate-count-wrapper');
        var donate_count = state.donate_count;

        if (donate_count !== void 0) {
            $count.text(donate_count);
            if (donate_count === 0) {
                $countWrapper.hide();
            } else {
                $countWrapper.show();
            }
        }
        updateState({ order: null });
    });

    on('.js-donate-btn', 'click', function () {
        dispatchStep(getCurrentStep());
    });

    on('.donate-money', 'click', function () {
        var $this = $(this);
        var $ipt = $this.find('input');
        $('.donate-money').removeClass('_selected');
        $this.addClass('_selected');
        var money = $this.data('value');
        if ($ipt.length) {
            onMoneyIptChange.call($ipt[0], { type: 'change' });
            $ipt.focus();
        } else {
            setV('money', money);
        }
    });

    on('.donate-money', 'mouseenter mouseleave', onDonateMoneyHover);

    function onDonateMoneyHover(_ref7) {
        var type = _ref7.type;

        var $cursor = $('.donate-money-cursor');
        var $this = $(this);
        var $all = $('.donate-money');
        var $cured = $('.donate-money._cur');
        var curedIdx = $all.index($cured);
        var idx = $all.index($this);
        var duration = void 0;
        var pos = void 0;
        if (type === 'mouseenter') {
            pos = $this.position();
            if (curedIdx === -1) {
                duration = 2;
            } else {
                duration = Math.abs(idx - curedIdx) * 50 + 50;
            }
        } else {
            var $selected = $('.donate-money._selected');
            var selectedIdx = $all.index($selected);
            if (selectedIdx === -1) {
                selectedIdx = 2;
                pos = $all.eq(selectedIdx).position();
            } else {
                pos = $selected.position();
            }
            duration = Math.abs(idx - selectedIdx) * 50 + 50;
        }
        var left = pos.left;
        duration = duration + 'ms';
        $cursor.data('idx', idx);
        $cursor.removeClass('_hidden').css({
            left: left,
            'transition-duration': duration,
            '-webkit-transition-duration': duration,
            '-moz-transition-duration': duration,
            '-ms-transition-duration': duration,
            '-o-transition-duration': duration
        });
    }

    function onMoneyIptChange(_ref8) {
        var type = _ref8.type;

        var $this = $(this);
        var value = $this.val().trim();
        var $money = $this.parents('.donate-money');
        var $msgBox = $money.find('.donate-money-msg-box');
        var money = parseFloat(value);
        var showMsg = function showMsg(msg) {
            $msgBox.addClass('_show').text(msg);
        };
        var hideMsg = function hideMsg() {
            $msgBox.removeClass('_show');
        };
        var cleanData = function cleanData() {
            setV('money', '');
            $this.data('value', '');
        };
        var setData = function setData() {
            $this.data('value', money);
            setV('money', money);
        };

        if (!value) {
            cleanData();
            return;
        }

        if (isNaN(money)) {
            showMsg('格式有误');
            cleanData();
            return;
        }
        if (type === 'change') {
            money = money.toFixed(2);
            $this.val(money);
        }
        if (money < 1) {
            showMsg('最少 1 元');
            cleanData();
            return;
        }
        if (money > 520) {
            showMsg('最多 520 元');
            cleanData();
            return;
        }
        hideMsg();
        setData();
    }

    on('.donate-money-text input', 'input change', onMoneyIptChange);

    on('.donate-sync input', 'change', function () {
        var $this = $(this);
        setV('sync', $this.is(':checked'));
    });

    on('.donate-comment textarea', 'change', function () {
        var $this = $(this);
        var v = $this.val().trim();
        setV('comment', v);
    });

    btnClick({
        selector: '.donate-btn',
        cb: function cb(payload) {
            var order = payload.order;
            var url = payload.url;

            updateState(payload);
            dispatchChannel(order, url);
        },
        failure: function failure(msg, payload) {
            var order = payload.order;

            if (order && order.channel === CHANNELS.BALANCE) {
                updateState(payload);
                dispatchStep(STEPS.PAY_FAILURE, msg);
            } else {
                alert(msg);
            }
        }
    });

    btnClick({
        selector: '.donate-channel',
        cb: function cb(payload) {
            var order = payload.order;
            var url = payload.url;

            updateState(payload);
            dispatchChannel(order, url);
        },
        processData: function processData(d) {
            var $this = $(this);
            d.channel = +$this.data('channel');
            return d;
        },
        failure: function failure(msg, payload) {
            var order = payload.order;

            if (order && order.channel === CHANNELS.BALANCE) {
                updateState(payload);
                dispatchStep(STEPS.PAY_FAILURE, msg);
            } else {
                alert(msg);
            }
        }
    });

    on('.donate-done', 'click', function () {
        var $this = $(this);
        if ($this.attr('disabled')) {
            return;
        }
        popup.clear();
    });

    on('.donate-channel-change, .donate-channel-change-lnk a', 'click', function () {
        dispatchStep(STEPS.SELECT_CHANNEL);
    });

    function getAnimationEndEvent() {
        var t;
        var el = document.createElement('fakeelement');
        var animations = {
            'WebkitAnimation': 'webkitAnimationEnd',
            'MozAnimation': 'animationend',
            'MSAnimation': 'msAnimationEnd',
            'OAnimation': 'oAnimationEnd',
            'animation': 'animationEnd'
        };

        for (t in animations) {
            if (el.style[t] !== undefined) {
                return animations[t];
            }
        }

        return void 0;
    }

    function getTransitionEndEvent() {
        var t;
        var el = document.createElement('fakeelement');
        var transitions = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'MSTransition': 'msTransitionEnd',
            'OTransition': 'oTransitionEnd',
            'transition': 'transitionEnd'
        };

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
        return void 0;
    }

    $D.bind(transitionEndEvent, function (e) {
        var $cur = $(e.target);
        if (!$cur.is('.donate-money-cursor')) {
            return;
        }
        var idx = $cur.data('idx');
        var $all = $('.donate-money');
        $all.removeClass('_cur');
        $all.eq(idx).addClass('_cur');
    });

    $W.bind('keydown', function (_ref9) {
        var keyCode = _ref9.keyCode;

        if (keyCode === 27) {
            popup.close();
        }
    });
    on('.donate-popup-close', 'click', function () {
        popup.close();
    });

    (function () {
        var px = void 0,
            py = void 0;
        on('.donate-popup-header', 'touchstart mousedown', function (_ref10) {
            var clientX = _ref10.clientX;
            var clientY = _ref10.clientY;

            px = clientX;
            py = clientY;
        });
        $D.bind('touchend mouseup', function () {
            px = py = void 0;
        });
        $D.bind('touchmove mousemove', function (_ref11) {
            var clientX = _ref11.clientX;
            var clientY = _ref11.clientY;

            if (px === void 0) {
                return;
            }
            var $popup = $('.donate-popup-wrapper');
            var dx = clientX - px;
            var dy = clientY - py;
            var top = parseFloat($popup.css('top'));
            var left = parseFloat($popup.css('left'));
            var maxTop = $(window).height() - $popup.outerHeight();
            var maxLeft = $(window).width() - $popup.outerWidth();
            top += dy;
            left += dx;
            left = left < 0 ? 0 : left;
            top = Math.min(top, maxTop);
            left = Math.min(left, maxLeft);
            top = top < 0 ? 0 : top;
            $popup.css({
                top: top,
                left: left
            });
            px = clientX;
            py = clientY;
            $popup.attr('moved', true);
        });
    })();
});