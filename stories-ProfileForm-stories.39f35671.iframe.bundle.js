"use strict";(self.webpackChunkfurtivite_github_io=self.webpackChunkfurtivite_github_io||[]).push([[295],{"./src/stories/ProfileForm.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/ProfileForm",component:__webpack_require__("./src/features/forms/index.ts").r8,tags:["autodocs"]};var Default={args:{}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/features/forms/AuthRegForm.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>AuthRegForm,x:()=>EAuthRegVariables});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_hook_form__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),react_i18next__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),clsx__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_app_StoreContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/StoreContext.ts"),_shared__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var EAuthRegVariables=function(EAuthRegVariables){return EAuthRegVariables.registration="REG",EAuthRegVariables.authorization="AUTH",EAuthRegVariables}({}),AuthRegForm=function AuthRegForm(_ref){var type=_ref.type,_useForm=(0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.cI)(),handleSubmit=_useForm.handleSubmit,register=_useForm.register,reset=_useForm.reset,errors=_useForm.formState.errors,t=(0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.$G)().t,isDarkTheme=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_app_StoreContext__WEBPACK_IMPORTED_MODULE_2__.xf).theme===_app_StoreContext__WEBPACK_IMPORTED_MODULE_2__.Op.DARK,className=(0,clsx__WEBPACK_IMPORTED_MODULE_6__.Z)("w-full p-2 border-[1px] border-solid active:outline focus:outline rounded","disabled:bg-w-100 txt-b-700",isDarkTheme?"bg-b-900 border-b-100 active:outline-w-900 focus:outline-w-900":"bg-w-900 active:outline-b-900 border-b-200 focus:outline-b-900");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form",{name:"auth-reg",className:"grid gap-2",onSubmit:handleSubmit((function onSubmit(data){console.log("Form :",data),reset()})),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label",{className:"grid gap-2",children:[t("forms.authReg.login.label"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",_objectSpread(_objectSpread({},register("login",{required:t("forms.authReg.login.requiredMessage"),pattern:{value:/^[A-Za-z]+$/g,message:t("forms.authReg.login.patternMessage")}})),{},{className,placeholder:t("forms.authReg.login.placeholder"),name:"login",required:!0,form:"auth-reg"})),errors.login&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{className:"text-red-600",children:"".concat(errors.login.message)})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label",{className:"grid gap-2",children:[t("forms.authReg.password.label"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",_objectSpread(_objectSpread({},register("password",{required:t("forms.authReg.password.requiredMessage"),minLength:type===EAuthRegVariables.registration&&{value:8,message:t("forms.authReg.password.patternMessage")}})),{},{className,placeholder:t("forms.authReg.password.placeholder"),name:"password",required:!0,form:"auth-reg"})),errors.password&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{className:"text-red-600",children:"".concat(errors.password.message)})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_shared__WEBPACK_IMPORTED_MODULE_3__.un,{type:"submit",children:type===EAuthRegVariables.registration?t("forms.authReg.submitReg"):t("forms.authReg.submitAuth")})]})};AuthRegForm.displayName="AuthRegForm";try{AuthRegForm.displayName="AuthRegForm",AuthRegForm.__docgenInfo={description:"",displayName:"AuthRegForm",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"REG"'},{value:'"AUTH"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/features/forms/AuthRegForm.tsx#AuthRegForm"]={docgenInfo:AuthRegForm.__docgenInfo,name:"AuthRegForm",path:"src/features/forms/AuthRegForm.tsx#AuthRegForm"})}catch(__react_docgen_typescript_loader_error){}},"./src/features/forms/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{No:()=>AddGoodForm,C1:()=>AuthRegForm.C,r8:()=>ProfileForm});var react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),StoreContext=__webpack_require__("./src/app/StoreContext.ts"),shared=__webpack_require__("./src/shared/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var AddGoodForm=function AddGoodForm(_ref){var newId=_ref.newId,onSubmit=_ref.onSubmit,_useForm=(0,index_esm.cI)(),handleSubmit=_useForm.handleSubmit,register=_useForm.register,t=(0,es.$G)().t,isDarkTheme=react.useContext(StoreContext.xf).theme===StoreContext.Op.DARK,className=(0,clsx_m.Z)("w-full p-2 border-[1px] border-solid active:outline focus:outline rounded","disabled:bg-w-100 txt-b-700",isDarkTheme?"bg-b-900 border-b-100 active:outline-w-900 focus:outline-w-900":"bg-w-900 active:outline-b-900 border-b-200 focus:outline-b-900");return(0,jsx_runtime.jsxs)("form",{name:"add-good",className:"grid gap-2 grid-cols-[100px_auto]",onSubmit:handleSubmit(onSubmit),children:[(0,jsx_runtime.jsx)("label",{htmlFor:"id",className:"pt-2",children:"ID:"}),(0,jsx_runtime.jsx)("input",{id:"id",value:newId,className,disabled:!0}),(0,jsx_runtime.jsx)("label",{htmlFor:"title",className:"pt-2",children:t("forms.goods.title")}),(0,jsx_runtime.jsx)("input",_objectSpread(_objectSpread({},register("title",{value:"",required:!0})),{},{id:"title",className,placeholder:t("forms.goods.titlePlaceholder")})),(0,jsx_runtime.jsx)("label",{htmlFor:"details",className:"pt-2",children:t("forms.goods.details")}),(0,jsx_runtime.jsx)("textarea",_objectSpread(_objectSpread({},register("details",{value:"",required:!0})),{},{className,name:"details",placeholder:t("forms.goods.detailsPlaceholder"),required:!0})),(0,jsx_runtime.jsx)("label",{htmlFor:"price",className:"pt-2",children:t("forms.goods.price")}),(0,jsx_runtime.jsx)("input",_objectSpread(_objectSpread({},register("price",{value:Number(""),required:!0})),{},{id:"price",placeholder:t("forms.goods.pricePlaceholder"),className})),(0,jsx_runtime.jsx)(shared.un,{type:"submit",children:t("forms.submit")})]})};AddGoodForm.displayName="AddGoodForm";try{AddGoodForm.displayName="AddGoodForm",AddGoodForm.__docgenInfo={description:"",displayName:"AddGoodForm",props:{newId:{defaultValue:null,description:"Новый id",name:"newId",required:!0,type:{name:"number"}},onSubmit:{defaultValue:null,description:"функция сабмита формы",name:"onSubmit",required:!0,type:{name:"(data: Partial<IGoodsItem>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/features/forms/AddGoodForm.tsx#AddGoodForm"]={docgenInfo:AddGoodForm.__docgenInfo,name:"AddGoodForm",path:"src/features/forms/AddGoodForm.tsx#AddGoodForm"})}catch(__react_docgen_typescript_loader_error){}var AuthRegForm=__webpack_require__("./src/features/forms/AuthRegForm.tsx");function ProfileForm_typeof(o){return ProfileForm_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},ProfileForm_typeof(o)}function ProfileForm_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function ProfileForm_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ProfileForm_ownKeys(Object(t),!0).forEach((function(r){ProfileForm_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ProfileForm_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function ProfileForm_defineProperty(obj,key,value){return(key=function ProfileForm_toPropertyKey(arg){var key=function ProfileForm_toPrimitive(input,hint){if("object"!==ProfileForm_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==ProfileForm_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===ProfileForm_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var ProfileForm=function ProfileForm(){var t=(0,es.$G)().t,_useForm=(0,index_esm.cI)(),handleSubmit=_useForm.handleSubmit,register=_useForm.register,reset=_useForm.reset,errors=_useForm.formState.errors,isDarkTheme=react.useContext(StoreContext.xf).theme===StoreContext.Op.DARK,className=(0,clsx_m.Z)("w-full p-2 border-[1px] border-solid active:outline focus:outline rounded","disabled:bg-w-100 txt-b-700",isDarkTheme?"bg-b-900 border-b-100 active:outline-w-900 focus:outline-w-900":"bg-w-900 active:outline-b-900 border-b-200 focus:outline-b-900");return(0,jsx_runtime.jsxs)("form",{name:"profile",className:"grid gap-2",onSubmit:handleSubmit((function onSubmit(data){console.log("Form :",data),reset()})),children:[(0,jsx_runtime.jsxs)("label",{className:"grid gap-2",children:[t("forms.name.label"),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("input",ProfileForm_objectSpread(ProfileForm_objectSpread({},register("name",{required:t("forms.name.requiredMessage"),pattern:{value:/^[A-Za-zА-Яа-я]+$/g,message:t("forms.name.patternMessage")}})),{},{className,placeholder:t("forms.name.placeholder"),name:"name",required:!0,form:"profile"})),errors.name&&(0,jsx_runtime.jsx)("p",{className:"text-red-600",children:errors.name.message})]})]}),(0,jsx_runtime.jsxs)("label",{className:"grid gap-2",children:[t("forms.about.label"),(0,jsx_runtime.jsx)("textarea",ProfileForm_objectSpread(ProfileForm_objectSpread({},register("aboutMe")),{},{className,placeholder:t("forms.about.placeholder"),name:"about",required:!0,form:"profile"}))]}),(0,jsx_runtime.jsx)(shared.un,{type:"submit",children:t("forms.submit")})]})};ProfileForm.displayName="ProfileForm";try{ProfileForm.displayName="ProfileForm",ProfileForm.__docgenInfo={description:"",displayName:"ProfileForm",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/features/forms/ProfileForm.tsx#ProfileForm"]={docgenInfo:ProfileForm.__docgenInfo,name:"ProfileForm",path:"src/features/forms/ProfileForm.tsx#ProfileForm"})}catch(__react_docgen_typescript_loader_error){}}}]);