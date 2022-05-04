class StatDate {
    #start;
    #end;

    constructor(start, end) {
        this.#start = StatDate.formatStart(start);
        this.#end = StatDate.formatEnd(end);
        if (this.#start > this.#end) {
            throw new Error("start must be before end");
        }
    }

    get start() {
        return this.#start;
    }

    set start(start) {
        start = StatDate.formatStart(start);
        if (this.end && start) {
            if (start > this.end) {
                throw new Error("start must be before end");
            }
        }
        this.#start = start;
    }

    get end() {
        return this.#end;
    }

    set end(end) {
        end = StatDate.formatEnd(end);
        if (this.start && end) {
            if (this.start > end) {
                throw new Error("start must be before end");
            }
        }
        this.#end = end;
    }

    static formatDate(date) {
        const dateObj = new Date(date);
        const year = dateObj.getFullYear();
        const day = ("0" + dateObj.getDate()).slice(-2);
        const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
        return year + "-" + month + "-" + day;
    }

    static formatStart(start) {
        const timeDeltaMax = 181;
        if (!start) {
            start = new Date();
            start.setDate(start.getDate() - timeDeltaMax);
        }
        if (start instanceof Date) {
            start = StatDate.formatDate(start);
        }
        const parsed = start.split("-");
        if (parsed.length === 1) {
            start += "-01-01";
        } else if (parsed.length === 2) {
            start += "-01";
        } else if (parsed.length !== 3) {
            throw new Error("start format is incorrect");
        }
        return start;
    }

    static formatEnd(end) {
        if (!end) {
            end = new Date();
        }
        if (end instanceof Date) {
            end = StatDate.formatDate(end);
        }
        const parsed = end.split("-");
        if (parsed.length === 1) {
            end += "-12-31";
        } else if (parsed.length === 2) {
            const lastDay = new Date(
                parseInt(parsed[0]),
                parseInt(parsed[1]) + 1,
                0
            );
            end += "-" + ("0" + lastDay.getDate()).slice(-2);
        } else if (parsed.length !== 3) {
            throw new Error("end format is incorrect");
        }
        return end;
    }
}

module.exports = StatDate;
