"use strict";
exports.__esModule = true;
exports.DataService = void 0;
var DataService = /** @class */ (function () {
    function DataService() {
        this.data = ['Apple iPhone XR', 'Samsung Galaxy S9', 'Nokia 9'];
    }
    DataService.prototype.getData = function () {
        return this.data;
    };
    // tslint:disable-next-line:typedef
    DataService.prototype.addData = function (name) {
        this.data.push(name);
    };
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map