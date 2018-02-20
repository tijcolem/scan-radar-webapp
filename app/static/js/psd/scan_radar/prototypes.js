if (!Date.prototype.toCalendarString) {

    (function() {

        function pad(number) {
            var r = String(number);
            if (r.length === 1) {
                r = '0' + r;
            }
            return r;
        }

        Date.prototype.toCalendarString = function() {
            return this.getUTCFullYear() +
                '-' + pad(this.getUTCMonth() + 1) +
                '-' + pad(this.getUTCDate()) +
                ' ' + pad(this.getUTCHours()) +
                ':' + pad(this.getUTCMinutes());
        };

    }());
}




if (!Date.prototype.toISOString) {

    (function() {

        function pad(number) {
            var r = String(number);
            if (r.length === 1) {
                r = '0' + r;
            }
            return r;
        }

        Date.prototype.toISOString = function() {
            return this.getUTCFullYear() +
                '-' + pad(this.getUTCMonth() + 1) +
                '-' + pad(this.getUTCDate()) +
                'T' + pad(this.getUTCHours()) +
                ':' + pad(this.getUTCMinutes()) +
                ':' + pad(this.getUTCSeconds()) +
                '.' + String((this.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5) +
                'Z';
        };

    }());
}




function convertTimeStamp(EpochTime) {

    var TimeObj = new Date(EpochTime * 1000);

    return TimeObj;


}



Object.keys = Object.keys || function(o) {
    var result = [];
    for (var name in o) {
        if (o.hasOwnProperty(name))
            result.push(name);
    }
    return result;
};
