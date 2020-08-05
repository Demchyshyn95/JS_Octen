function userCard(number) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = number <= 3 ? number : 'key not valid';

    function getCardOptions() {
        return {
            key,
            balance,
            transactionLimit,
            historyLogs,
        }
    }
    function putCredits(putMoney) {
        if (putMoney > 0) { balance += putMoney }
        let nowDate = date();
        addHistory('putCredit', putMoney, nowDate.newtime + ' ' + nowDate.newdate)
    }

    function date() {
        let now = new Date();
        let newdate = now.toLocaleDateString();
        let newtime = now.toLocaleTimeString();
        return { newdate, newtime };
    }
    function takeCredits(takeMoney, typeOperation) {
        if (balance >= takeMoney && transactionLimit >= takeMoney) {
            balance -= takeMoney;
            let nowDate = date();
            typeOperation
                ? addHistory(typeOperation, takeMoney, nowDate.newtime + ' ' + nowDate.newdate)
                : addHistory('takeCredits', takeMoney, nowDate.newtime + ' ' + nowDate.newdate)
            return true
        }
        else {
            console.error('Перевищений ліміт або нема грошей *(')
        }
        return false
    }

    function setTransactionLimit(newLimit) {
        if (newLimit > 0) {
            let nowDate = date();
            addHistory('setTransactionLimit', newLimit, nowDate.newtime + ' ' + nowDate.newdate)
            transactionLimit = newLimit;
        }
    }

    function transferCredits(sum, card) {
        let credit = +(sum * 1.05).toFixed();
        let check = takeCredits(credit, 'transferCredits');
        check
            ? card.putCredits(sum)
            : '';
    }

    function addHistory(operationType, credits, operationTime) {
        historyLogs.push({ operationType, credits, operationTime })
    }

    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits

    }
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.card = [];
    }
    addCard = () => {
        if (this.card.length < 3) {
            this.card.push(new userCard(this.card.length + 1))
        } else {
            console.log('cards limit ower')
        }
    }
    getUserCardByKey = (number) => {
        let finded = this.card.find(value => value.getCardOptions().key === number);
        if (finded) {
            return finded;
        } else {
            console.error('такої карти немає')
        }
    }
}

let vova = new UserAccount('Vova');
let andriy = new UserAccount('Andriy');
vova.addCard();
vova.addCard();
vova.addCard();
andriy.addCard();
let card3Vova = vova.getUserCardByKey(2);
console.log(card3Vova)
card3Vova.putCredits(3400);
card3Vova.setTransactionLimit(3000);
console.log(card3Vova.getCardOptions());
let andriyCadr1 = andriy.getUserCardByKey(1);
console.log(andriyCadr1.getCardOptions())
console.log('---------------------------');
console.log('---------------------------');
console.log('---------------------------');

card3Vova.transferCredits(1750, andriyCadr1);
console.log(andriyCadr1.getCardOptions())
console.log(card3Vova.getCardOptions());