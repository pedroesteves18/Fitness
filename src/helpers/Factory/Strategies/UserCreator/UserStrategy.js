


export default class UserStrategy{
    constructor(strategy){
        this.strategy = strategy
    }

    async executar(data){
        return await this.strategy.executar(data)
    }
}