export default class ProxyFactory {

    /**
     * Cria um design pattern Proxy
     *
     * @param {Objec} object
     * @param {Array} props
     * @param {Function} callback
     * @return {Proxy}
     */
    static create(object, props, callback)
    {
        return new Proxy(object, {
            get(target, prop, receiver) {
                if (props.includes(prop) && ProxyFactory._isFunction(target[prop])) {
                    return function() {
                        let response = Reflect.apply(target[prop], target, arguments);
                        callback(target);
                        return response;
                    }
                }

                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver) {
                let response = Reflect.set(target, prop, value, receiver);
                if (props.includes(prop)) callback(target);
                return response;
            }
        });
    }

    /**
     * Retorna se a funcao passada e uma funcao
     *
     * @param {String} func
     * @return {Bool}
     */
    static _isFunction(func) {
        return typeof (func) == typeof(Function);
    }
}
