(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Header.js
__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Sustainovate/my-next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Sustainovate/my-next-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Sustainovate/my-next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Header() {
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProfileOpen, setIsProfileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            function handleClickOutside(event) {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setIsProfileOpen(false);
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "Header.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    // Close menu when profile is opened and vice versa
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (isProfileOpen) setIsMenuOpen(false);
        }
    }["Header.useEffect"], [
        isProfileOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (isMenuOpen) setIsProfileOpen(false);
        }
    }["Header.useEffect"], [
        isMenuOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        id: "site-header",
        role: "banner",
        className: "bg-teal-400 h-16 sm:h-20 text-base sm:text-xl mb-8 sm:mb-12 lg:mb-24 relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-screen-xl mx-auto px-4 sm:px-5 lg:px-5 items-center h-16 sm:h-20 flex relative gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "items-center flex z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        title: "Sustainovate",
                        rel: "home",
                        className: "text-sky-800 focus:text-white hover:text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "Logo.png",
                            alt: "Sustainovate Logo",
                            className: "h-12 w-auto sm:h-14 md:h-16 lg:h-16"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    "aria-label": "Primary",
                    className: "hidden lg:flex flex-1 mx-4 justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        id: "menu-main",
                        className: "flex gap-3 xl:gap-5 pl-0 m-0 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "inline",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "text-black font-sans font-semibold no-underline inline-block px-2 xl:px-3 py-2 text-base xl:text-lg focus:underline hover:underline whitespace-nowrap",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "inline",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/events",
                                    className: "text-black font-sans font-semibold no-underline inline-block px-2 xl:px-3 py-2 text-base xl:text-lg focus:underline hover:underline whitespace-nowrap",
                                    children: "Events"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "inline",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/leaderboard",
                                    className: "text-black font-sans font-semibold no-underline inline-block px-2 xl:px-3 py-2 text-base xl:text-lg focus:underline hover:underline whitespace-nowrap",
                                    children: "Leaderboard"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "inline",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/#contact",
                                    className: "text-black font-sans font-semibold no-underline inline-block px-2 xl:px-3 py-2 text-base xl:text-lg focus:underline hover:underline whitespace-nowrap",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "inline",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "text-black font-sans font-semibold no-underline inline-block px-2 xl:px-3 py-2 text-base xl:text-lg focus:underline hover:underline whitespace-nowrap",
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setIsMenuOpen(!isMenuOpen),
                    className: "lg:hidden flex items-center justify-center text-black cursor-pointer z-50 ml-auto mr-2 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:bg-white transition-colors",
                    "aria-label": "Menu",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xl sm:text-2xl font-bold leading-none",
                        children: isMenuOpen ? '✕' : '☰'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    "aria-label": "Primary",
                    className: "lg:hidden fixed z-[1000] bg-teal-400 w-full min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] top-16 sm:top-20 left-0 px-4 sm:px-8 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        id: "menu-main-mobile",
                        className: "my-4 sm:my-5 pl-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "block border-b border-teal-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "text-black font-sans font-semibold no-underline block p-3 sm:p-4 text-base sm:text-lg focus:underline hover:underline active:bg-teal-500",
                                    onClick: ()=>setIsMenuOpen(false),
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "block border-b border-teal-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/events",
                                    className: "text-black font-sans font-semibold no-underline block p-3 sm:p-4 text-base sm:text-lg focus:underline hover:underline active:bg-teal-500",
                                    onClick: ()=>setIsMenuOpen(false),
                                    children: "Events"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                    lineNumber: 123,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                lineNumber: 122,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "block border-b border-teal-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/leaderboard",
                                    className: "text-black font-sans font-semibold no-underline block p-3 sm:p-4 text-base sm:text-lg focus:underline hover:underline active:bg-teal-500",
                                    onClick: ()=>setIsMenuOpen(false),
                                    children: "Leaderboard"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                    lineNumber: 132,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                lineNumber: 131,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "block border-b border-teal-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/#contact",
                                    className: "text-black font-sans font-semibold no-underline block p-3 sm:p-4 text-base sm:text-lg focus:underline hover:underline active:bg-teal-500",
                                    onClick: ()=>setIsMenuOpen(false),
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                    lineNumber: 141,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                lineNumber: 140,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    className: "text-black font-sans font-semibold no-underline block p-3 sm:p-4 text-base sm:text-lg focus:underline hover:underline active:bg-teal-500",
                                    onClick: ()=>setIsMenuOpen(false),
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                    lineNumber: 150,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                lineNumber: 149,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                        lineNumber: 112,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                    lineNumber: 108,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-50 flex-shrink-0",
                    ref: dropdownRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsProfileOpen(!isProfileOpen),
                            className: "cursor-pointer text-black bg-white/80 backdrop-blur-sm lg:bg-teal-400 w-10 h-10 sm:w-12 sm:h-12 lg:w-40 xl:w-48 lg:h-auto font-sans font-semibold text-xs sm:text-sm lg:text-base px-1 sm:px-2 lg:px-4 py-1 sm:py-2 lg:py-2.5 border-none rounded-lg lg:rounded-none flex items-center justify-center gap-1 lg:gap-2 hover:bg-white lg:hover:bg-teal-500 active:bg-gray-100 lg:active:bg-teal-600 transition-colors shadow-md lg:shadow-none",
                            "aria-label": "Profile Menu Toggle",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://ui-avatars.com/api/?name=User&background=ffffff&color=000000&size=32",
                                    alt: "User avatar",
                                    className: "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden lg:inline whitespace-nowrap",
                                    children: "Profile"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: `hidden lg:block w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 flex-shrink-0 ${isProfileOpen ? 'rotate-180' : ''}`,
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M19 9l-7 7-7-7"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this),
                        isProfileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute right-0 top-12 sm:top-14 lg:top-20 w-56 sm:w-60 lg:w-64 bg-white rounded-lg shadow-xl overflow-hidden z-[2000]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/events",
                                            className: "flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors no-underline",
                                            onClick: ()=>setIsProfileOpen(false),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                                        lineNumber: 196,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                                    lineNumber: 195,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-sans font-normal text-sm sm:text-base",
                                                    children: "Upcoming Events"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                                    lineNumber: 198,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                            lineNumber: 190,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/leaderboard",
                                            className: "flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors no-underline",
                                            onClick: ()=>setIsProfileOpen(false),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                                        lineNumber: 208,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                                    lineNumber: 207,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-sans font-normal text-sm sm:text-base",
                                                    children: "Leaderboard"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                                    lineNumber: 210,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                            lineNumber: 202,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                        lineNumber: 201,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#",
                                            className: "flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors no-underline",
                                            onClick: ()=>setIsProfileOpen(false),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                                            lineNumber: 220,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                                            lineNumber: 221,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                                    lineNumber: 219,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-sans font-normal text-sm sm:text-base",
                                                    children: "Settings"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                                    lineNumber: 223,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                            lineNumber: 214,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                        lineNumber: 213,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "border-t border-gray-200 mt-2 pt-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors no-underline",
                                            onClick: ()=>setIsProfileOpen(false),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                                        lineNumber: 233,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                                    lineNumber: 232,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-sans font-normal text-sm sm:text-base",
                                                    children: "Sign Up"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                                    lineNumber: 235,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                            lineNumber: 227,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                        lineNumber: 226,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors w-full text-left",
                                            onClick: ()=>{
                                                setIsProfileOpen(false);
                                                console.log('Logging out...');
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                                        lineNumber: 247,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                                    lineNumber: 246,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-sans font-normal text-sm sm:text-base",
                                                    children: "Log Out"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                                    lineNumber: 249,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                            lineNumber: 239,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                        lineNumber: 238,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                                lineNumber: 188,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                            lineNumber: 187,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
                    lineNumber: 163,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(Header, "VVnACXswDHyR49GaVTPP+pcEXz8=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Sustainovate/my-next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Sustainovate/my-next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Sustainovate/my-next-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$src$2f$components$2f$Header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Sustainovate/my-next-app/src/components/Header.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const LeaderboardPage = ()=>{
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [rankFilter, setRankFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const leaderboardData = [];
    const filteredData = leaderboardData.filter((user)=>{
        const searchMatch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || user.username.toLowerCase().includes(searchQuery.toLowerCase());
        const rankMatch = rankFilter === 'all' || rankFilter === 'top3' && user.rank <= 3 || rankFilter === 'top10' && user.rank <= 10;
        return searchMatch && rankMatch;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-full text-base relative bg-stone-50 font-sans overflow-x-hidden select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-[1] w-screen h-full absolute overflow-x-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-md:left-[-450px] absolute -left-80 top-[500px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/blue-triangle.svg",
                            alt: "",
                            className: "w-96 h-96"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                            lineNumber: 29,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute max-md:-left-64 top-[-200px] -left-48",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/orange-square.svg",
                            alt: "",
                            className: "w-[500px] h-[500px]"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                            lineNumber: 32,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute max-md:right-[-800px] right-[-900px] top-[300px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/orange-square.svg",
                            alt: "",
                            className: "w-[500px] h-[500px]"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                            lineNumber: 35,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute max-md:right-[-500px] -right-80 -top-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/yellow-triangle.svg",
                            alt: "",
                            className: "w-[450px] h-[450px]"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                            lineNumber: 38,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -left-80 top-[1400px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/yellow-triangle.svg",
                            alt: "",
                            className: "w-[450px] h-[450px]"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                            lineNumber: 41,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-md:right-0 absolute right-0 top-[1200px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://proxy.extractcss.dev/https://sustainablewebdesign.org/wp-content/themes/swdorg/public/images/blue-blob.svg",
                            alt: "",
                            className: "w-[550px] h-[550px]"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                "aria-label": "Skip to main content",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "text-black w-px h-px no-underline absolute left-[-10000px] overflow-hidden focus:z-[100] focus:bg-white focus:w-auto focus:h-auto focus:underline focus:p-2.5 focus:border-none focus:left-0 focus:top-0 hover:z-[100] hover:bg-white hover:w-auto hover:h-auto hover:underline hover:p-2.5 hover:border-none hover:left-0 hover:top-0",
                    href: "#main",
                    children: "Skip to Main Content"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                    lineNumber: 49,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-10 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$src$2f$components$2f$Header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                        lineNumber: 58,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-6xl mx-auto px-4 sm:px-5 pb-12 sm:pb-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            id: "main",
                            tabIndex: -1,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 sm:mb-8 pt-8 sm:pt-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "my-6 sm:my-8 text-4xl sm:text-5xl md:text-5xl font-black leading-tight text-black",
                                            children: "Leaderboard"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "my-4 sm:my-5 max-w-3xl font-sans text-base sm:text-lg leading-normal text-gray-700",
                                            children: "Track top performers in our sustainability community"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 sm:gap-6 max-lg:flex-col mb-12 sm:mb-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-lg:w-full w-72 shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white p-4 sm:p-6 rounded-xl border-2 border-gray-200 shadow-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-4 sm:mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "font-bold text-base sm:text-lg mb-2 sm:mb-3 text-black",
                                                                children: "Search"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                lineNumber: 75,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "Name or username",
                                                                value: searchQuery,
                                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                                className: "w-full px-3 sm:px-4 py-2 text-sm rounded-lg border-2 border-gray-300 bg-white text-black focus:outline-none focus:border-green-700 focus:ring-2 focus:ring-green-700"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                lineNumber: 76,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                        lineNumber: 74,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "font-bold text-base sm:text-lg mb-2 sm:mb-3 text-black",
                                                                children: "Rank Range"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                lineNumber: 86,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setRankFilter('all'),
                                                                        className: `px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm border-2 transition-colors text-left ${rankFilter === 'all' ? 'bg-green-700 text-white border-green-700' : 'bg-white text-gray-700 border-gray-300 hover:border-green-700'}`,
                                                                        children: "All Ranks"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                        lineNumber: 88,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setRankFilter('top3'),
                                                                        className: `px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm border-2 transition-colors text-left ${rankFilter === 'top3' ? 'bg-green-700 text-white border-green-700' : 'bg-white text-gray-700 border-gray-300 hover:border-green-700'}`,
                                                                        children: "Top 3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                        lineNumber: 98,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setRankFilter('top10'),
                                                                        className: `px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm border-2 transition-colors text-left ${rankFilter === 'top10' ? 'bg-green-700 text-white border-green-700' : 'bg-white text-gray-700 border-gray-300 hover:border-green-700'}`,
                                                                        children: "Top 10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                        lineNumber: 108,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                lineNumber: 87,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                        lineNumber: 85,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white p-8 sm:p-12 rounded-xl border-2 border-gray-200 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "inline-block w-10 h-10 sm:w-12 sm:h-12 border-4 border-green-700 border-t-transparent rounded-full animate-spin mb-3 sm:mb-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                        lineNumber: 126,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm sm:text-base text-gray-600",
                                                        children: "Loading leaderboard..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                        lineNumber: 127,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 sm:space-y-4",
                                                children: filteredData.length > 0 ? filteredData.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `bg-white p-4 sm:p-6 rounded-xl border-2 transition-all hover:shadow-md ${user.isCurrentUser ? 'border-green-700 bg-green-50' : user.rank <= 3 ? 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-white' : 'border-gray-200 hover:border-green-700'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-start mb-4 max-sm:flex-col max-sm:gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-start gap-3 sm:gap-4 flex-1 max-sm:w-full",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-lg sm:text-xl font-black flex-shrink-0 ${user.rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white' : user.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-white' : user.rank === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white' : 'bg-gray-200 text-gray-700'}`,
                                                                                children: [
                                                                                    "#",
                                                                                    user.rank
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                                lineNumber: 145,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex-1 min-w-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center gap-2 mb-2 flex-wrap",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                                className: "font-bold text-lg sm:text-xl text-black truncate max-w-[200px] sm:max-w-none",
                                                                                                children: user.name
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                                                lineNumber: 159,
                                                                                                columnNumber: 35
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            user.isCurrentUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "bg-green-700 text-white font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs flex-shrink-0",
                                                                                                children: "YOU"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                                                lineNumber: 161,
                                                                                                columnNumber: 37
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            user.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: `px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold text-white flex-shrink-0 ${user.rank === 1 ? 'bg-yellow-600' : user.rank === 2 ? 'bg-gray-500' : 'bg-orange-600'}`,
                                                                                                children: user.badge
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                                                lineNumber: 166,
                                                                                                columnNumber: 37
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                                        lineNumber: 158,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3",
                                                                                        children: user.username
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                                        lineNumber: 173,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex gap-3 sm:gap-4 flex-wrap text-xs sm:text-sm text-gray-600",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "flex items-center gap-1 sm:gap-1.5",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                        className: "w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0",
                                                                                                        fill: "none",
                                                                                                        stroke: "currentColor",
                                                                                                        viewBox: "0 0 24 24",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                            strokeLinecap: "round",
                                                                                                            strokeLinejoin: "round",
                                                                                                            strokeWidth: 2,
                                                                                                            d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                                                            lineNumber: 178,
                                                                                                            columnNumber: 39
                                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                                                        lineNumber: 177,
                                                                                                        columnNumber: 37
                                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        children: user.level
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                                                        lineNumber: 180,
                                                                                                        columnNumber: 37
                                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                                                lineNumber: 176,
                                                                                                columnNumber: 35
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "flex items-center gap-1 sm:gap-1.5",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                        className: "w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0",
                                                                                                        fill: "none",
                                                                                                        stroke: "currentColor",
                                                                                                        viewBox: "0 0 24 24",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                            strokeLinecap: "round",
                                                                                                            strokeLinejoin: "round",
                                                                                                            strokeWidth: 2,
                                                                                                            d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                                                            lineNumber: 184,
                                                                                                            columnNumber: 39
                                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                                                        lineNumber: 183,
                                                                                                        columnNumber: 37
                                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "whitespace-nowrap",
                                                                                                        children: [
                                                                                                            user.achievements,
                                                                                                            " achievements"
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                                                        lineNumber: 186,
                                                                                                        columnNumber: 37
                                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                                                lineNumber: 182,
                                                                                                columnNumber: 35
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                                        lineNumber: 175,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                                lineNumber: 157,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                        lineNumber: 144,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-right flex-shrink-0 max-sm:w-full max-sm:text-left max-sm:flex max-sm:items-center max-sm:justify-between max-sm:border-t max-sm:border-gray-200 max-sm:pt-3 max-sm:mt-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "font-black text-2xl sm:text-3xl text-green-700 mb-0.5 sm:mb-1",
                                                                                        children: user.points
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                                        lineNumber: 194,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-xs text-gray-500 mb-2",
                                                                                        children: "points"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                                        lineNumber: 195,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                                lineNumber: 193,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            user.nextRank && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-gray-600 bg-gray-100 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full inline-block whitespace-nowrap",
                                                                                children: [
                                                                                    user.nextRank,
                                                                                    " pts to next"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                                lineNumber: 198,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                        lineNumber: 192,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                lineNumber: 143,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            user.isCurrentUser && user.nextRank && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pt-4 border-t border-gray-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between text-xs text-gray-600 mb-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    "Progress to Rank ",
                                                                                    user.rank - 1
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                                lineNumber: 208,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    Math.round((1 - user.nextRank / 1000) * 100),
                                                                                    "%"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                                lineNumber: 209,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                        lineNumber: 207,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-full h-2 bg-gray-200 rounded-full overflow-hidden",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-full bg-green-700 rounded-full transition-all duration-500",
                                                                            style: {
                                                                                width: `${Math.round((1 - user.nextRank / 1000) * 100)}%`
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                            lineNumber: 212,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                        lineNumber: 211,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                                lineNumber: 206,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, user.rank, true, {
                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                        lineNumber: 133,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white p-8 sm:p-12 rounded-xl border-2 border-gray-200 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Sustainovate$2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-4xl sm:text-5xl md:text-6xl font-black text-black",
                                                        children: "Coming Soon....."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                        lineNumber: 223,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                    lineNumber: 222,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                                lineNumber: 130,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                        lineNumber: 60,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Sustainovate/my-next-app/src/app/leaderboard/page.js",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LeaderboardPage, "m5eWIED7Zm8kVL3eLCkxxCa1SBA=");
_c = LeaderboardPage;
const __TURBOPACK__default__export__ = LeaderboardPage;
var _c;
__turbopack_context__.k.register(_c, "LeaderboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Sustainovate_my-next-app_src_1b85825b._.js.map