import ProxyFactory from '../models/ProxyFactory';

export default class Bind {
    constructor(object, view, ...props) {
        return ProxyFactory.create(
                object,
                props,
                model => view.update(model)
        );
    }
}
