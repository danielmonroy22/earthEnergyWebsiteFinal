"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./config/nodemailer.js":
/*!******************************!*\
  !*** ./config/nodemailer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mailOptions\": () => (/* binding */ mailOptions),\n/* harmony export */   \"transporter\": () => (/* binding */ transporter)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\nconst email = process.env.EMAIL;\nconst pass = process.env.EMAIL_PASS;\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n    service: \"gmail\",\n    auth: {\n        user: email,\n        pass: pass\n    }\n});\nconst mailOptions = {\n    from: email,\n    to: email\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvbm9kZW1haWxlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW9DO0FBRXBDLE1BQU1DLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsS0FBSztBQUMvQixNQUFNQyxPQUFPSCxRQUFRQyxHQUFHLENBQUNHLFVBQVU7QUFHNUIsTUFBTUMsY0FBY1AsaUVBQTBCLENBQUM7SUFDbERTLFNBQVM7SUFDVEMsTUFBTTtRQUNGQyxNQUFNVjtRQUNOSSxNQUFNQTtJQUNWO0FBQ0osR0FBRztBQUVJLE1BQU1PLGNBQWM7SUFDdkJDLE1BQU1aO0lBQ05hLElBQUliO0FBR1IsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2VhcnRoLWVuZXJneS13ZWJzaXRlLy4vY29uZmlnL25vZGVtYWlsZXIuanM/NTMyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xuXG5jb25zdCBlbWFpbCA9IHByb2Nlc3MuZW52LkVNQUlMO1xuY29uc3QgcGFzcyA9IHByb2Nlc3MuZW52LkVNQUlMX1BBU1M7XG5cblxuZXhwb3J0IGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgIHNlcnZpY2U6IFwiZ21haWxcIixcbiAgICBhdXRoOiB7XG4gICAgICAgIHVzZXI6IGVtYWlsLFxuICAgICAgICBwYXNzOiBwYXNzXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgbWFpbE9wdGlvbnMgPSB7XG4gICAgZnJvbTogZW1haWwsXG4gICAgdG86IGVtYWlsLFxuXG5cbn07XG4iXSwibmFtZXMiOlsibm9kZW1haWxlciIsImVtYWlsIiwicHJvY2VzcyIsImVudiIsIkVNQUlMIiwicGFzcyIsIkVNQUlMX1BBU1MiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsInNlcnZpY2UiLCJhdXRoIiwidXNlciIsIm1haWxPcHRpb25zIiwiZnJvbSIsInRvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config/nodemailer.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/contact.js":
/*!**********************************!*\
  !*** ./src/pages/api/contact.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var config_nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config/nodemailer */ \"(api)/./config/nodemailer.js\");\n\nconst CONTACT_MESSAGE_FIELDS = {\n    name: \"Name\",\n    email: \"Email\",\n    subject: \"Subject\",\n    message: \"Message\",\n    phone: \"PhoneNumber\"\n};\nconst generateEmailContent = (data)=>{\n    const stringData = Object.entries(data).reduce((str, [key, val])=>str += `${CONTACT_MESSAGE_FIELDS[key]}: \\n${val} \\n \\n`, \"\");\n    const htmlData = Object.entries(data).reduce((str, [key, val])=>{\n        return str += `<h3 class=\"form-heading\" align=\"left\">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class=\"form-answer\" align=\"left\">${val}</p>`;\n    }, \"\");\n    return {\n        text: stringData\n    };\n};\nconst handler = async (req, res)=>{\n    if (req.method === \"POST\") {\n        const data = req.body;\n        if (!data || !data.name || !data.email || !data.subject || !data.message || !data.phone) {\n            return res.status(400).send({\n                message: \"Bad request\"\n            });\n        }\n        try {\n            await config_nodemailer__WEBPACK_IMPORTED_MODULE_0__.transporter.sendMail({\n                ...config_nodemailer__WEBPACK_IMPORTED_MODULE_0__.mailOptions,\n                ...generateEmailContent(data),\n                subject: \"Earth energy Power you have a new submission for a solar quote\"\n            });\n            return res.status(200).json({\n                success: true\n            });\n        } catch (err) {\n            console.log(err);\n            return res.status(400).json({\n                message: err.message\n            });\n        }\n    }\n    return res.status(400).json({\n        message: \"Bad request\"\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NvbnRhY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkQ7QUFFN0QsTUFBTUUseUJBQXlCO0lBQzNCQyxNQUFNO0lBQ05DLE9BQU87SUFDUEMsU0FBUztJQUNUQyxTQUFTO0lBQ1RDLE9BQU87QUFDWDtBQUdBLE1BQU1DLHVCQUF1QixDQUFDQyxPQUFTO0lBQ25DLE1BQU1DLGFBQWFDLE9BQU9DLE9BQU8sQ0FBQ0gsTUFBTUksTUFBTSxDQUMxQyxDQUFDQyxLQUFLLENBQUNDLEtBQUtDLElBQUksR0FDWEYsT0FBTyxDQUFDLEVBQUVaLHNCQUFzQixDQUFDYSxJQUFJLENBQUMsSUFBSSxFQUFFQyxJQUFJLE1BQU0sQ0FBQyxFQUM1RDtJQUVKLE1BQU1DLFdBQVdOLE9BQU9DLE9BQU8sQ0FBQ0gsTUFBTUksTUFBTSxDQUFDLENBQUNDLEtBQUssQ0FBQ0MsS0FBS0MsSUFBSSxHQUFLO1FBQzlELE9BQVFGLE9BQU8sQ0FBQyxzQ0FBc0MsRUFBRVosc0JBQXNCLENBQUNhLElBQUksQ0FBQyx5Q0FBeUMsRUFBRUMsSUFBSSxJQUFJLENBQUM7SUFDNUksR0FBRztJQUVILE9BQU87UUFDSEUsTUFBTVI7SUFFVjtBQUNKO0FBRUEsTUFBTVMsVUFBVSxPQUFPQyxLQUFLQyxNQUFRO0lBQ2hDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3ZCLE1BQU1iLE9BQU9XLElBQUlHLElBQUk7UUFJckIsSUFBSSxDQUFDZCxRQUFRLENBQUNBLEtBQUtOLElBQUksSUFBSSxDQUFDTSxLQUFLTCxLQUFLLElBQUksQ0FBQ0ssS0FBS0osT0FBTyxJQUFJLENBQUNJLEtBQUtILE9BQU8sSUFBSSxDQUFDRyxLQUFLRixLQUFLLEVBQUU7WUFDckYsT0FBT2MsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRW5CLFNBQVM7WUFBYztRQUN6RCxDQUFDO1FBRUQsSUFBSTtZQUNBLE1BQU1MLG1FQUFvQixDQUFDO2dCQUN2QixHQUFHRCwwREFBVztnQkFDZCxHQUFHUSxxQkFBcUJDLEtBQUs7Z0JBQzdCSixTQUFTO1lBQ2I7WUFFQSxPQUFPZ0IsSUFBSUcsTUFBTSxDQUFDLEtBQUtHLElBQUksQ0FBQztnQkFBRUMsU0FBUyxJQUFJO1lBQUM7UUFDaEQsRUFBRSxPQUFPQyxLQUFLO1lBQ1ZDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWixPQUFPUixJQUFJRyxNQUFNLENBQUMsS0FBS0csSUFBSSxDQUFDO2dCQUFFckIsU0FBU3VCLElBQUl2QixPQUFPO1lBQUM7UUFDdkQ7SUFDSixDQUFDO0lBQ0QsT0FBT2UsSUFBSUcsTUFBTSxDQUFDLEtBQUtHLElBQUksQ0FBQztRQUFFckIsU0FBUztJQUFjO0FBQ3pEO0FBQ0EsaUVBQWVhLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lYXJ0aC1lbmVyZ3ktd2Vic2l0ZS8uL3NyYy9wYWdlcy9hcGkvY29udGFjdC5qcz9iY2I3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1haWxPcHRpb25zLCB0cmFuc3BvcnRlciB9IGZyb20gXCJjb25maWcvbm9kZW1haWxlclwiO1xuXG5jb25zdCBDT05UQUNUX01FU1NBR0VfRklFTERTID0ge1xuICAgIG5hbWU6IFwiTmFtZVwiLFxuICAgIGVtYWlsOiBcIkVtYWlsXCIsXG4gICAgc3ViamVjdDogXCJTdWJqZWN0XCIsXG4gICAgbWVzc2FnZTogXCJNZXNzYWdlXCIsXG4gICAgcGhvbmU6IFwiUGhvbmVOdW1iZXJcIlxufTtcblxuXG5jb25zdCBnZW5lcmF0ZUVtYWlsQ29udGVudCA9IChkYXRhKSA9PiB7XG4gICAgY29uc3Qgc3RyaW5nRGF0YSA9IE9iamVjdC5lbnRyaWVzKGRhdGEpLnJlZHVjZShcbiAgICAgICAgKHN0ciwgW2tleSwgdmFsXSkgPT5cbiAgICAgICAgICAgIChzdHIgKz0gYCR7Q09OVEFDVF9NRVNTQUdFX0ZJRUxEU1trZXldfTogXFxuJHt2YWx9IFxcbiBcXG5gKSxcbiAgICAgICAgXCJcIlxuICAgICk7XG4gICAgY29uc3QgaHRtbERhdGEgPSBPYmplY3QuZW50cmllcyhkYXRhKS5yZWR1Y2UoKHN0ciwgW2tleSwgdmFsXSkgPT4ge1xuICAgICAgICByZXR1cm4gKHN0ciArPSBgPGgzIGNsYXNzPVwiZm9ybS1oZWFkaW5nXCIgYWxpZ249XCJsZWZ0XCI+JHtDT05UQUNUX01FU1NBR0VfRklFTERTW2tleV19PC9oMz48cCBjbGFzcz1cImZvcm0tYW5zd2VyXCIgYWxpZ249XCJsZWZ0XCI+JHt2YWx9PC9wPmApO1xuICAgIH0sIFwiXCIpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogc3RyaW5nRGF0YSxcblxuICAgIH07XG59O1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcblxuXG5cbiAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLm5hbWUgfHwgIWRhdGEuZW1haWwgfHwgIWRhdGEuc3ViamVjdCB8fCAhZGF0YS5tZXNzYWdlIHx8ICFkYXRhLnBob25lKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBcIkJhZCByZXF1ZXN0XCIgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwoe1xuICAgICAgICAgICAgICAgIC4uLm1haWxPcHRpb25zLFxuICAgICAgICAgICAgICAgIC4uLmdlbmVyYXRlRW1haWxDb250ZW50KGRhdGEpLFxuICAgICAgICAgICAgICAgIHN1YmplY3Q6IFwiRWFydGggZW5lcmd5IFBvd2VyIHlvdSBoYXZlIGEgbmV3IHN1Ym1pc3Npb24gZm9yIGEgc29sYXIgcXVvdGVcIixcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBcIkJhZCByZXF1ZXN0XCIgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJtYWlsT3B0aW9ucyIsInRyYW5zcG9ydGVyIiwiQ09OVEFDVF9NRVNTQUdFX0ZJRUxEUyIsIm5hbWUiLCJlbWFpbCIsInN1YmplY3QiLCJtZXNzYWdlIiwicGhvbmUiLCJnZW5lcmF0ZUVtYWlsQ29udGVudCIsImRhdGEiLCJzdHJpbmdEYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsInN0ciIsImtleSIsInZhbCIsImh0bWxEYXRhIiwidGV4dCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJib2R5Iiwic3RhdHVzIiwic2VuZCIsInNlbmRNYWlsIiwianNvbiIsInN1Y2Nlc3MiLCJlcnIiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/contact.js"));
module.exports = __webpack_exports__;

})();