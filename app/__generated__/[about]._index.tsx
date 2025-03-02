/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import type { FontAsset, ImageAsset } from "@webstudio-is/sdk";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Fragment as Fragment_1, HtmlEmbed as HtmlEmbed, Image as Image, Box as Box, Slot as Slot, Button as Button, Text as Text, Heading as Heading, Paragraph as Paragraph, List as List, ListItem as ListItem, Separator as Separator, Input as Input } from "@webstudio-is/sdk-components-react";
import { Link as Link, Body as Body, Form as Form } from "@webstudio-is/sdk-components-react-router";
import { NavigationMenu as NavigationMenu, NavigationMenuList as NavigationMenuList, NavigationMenuItem as NavigationMenuItem, NavigationMenuTrigger as NavigationMenuTrigger, NavigationMenuContent as NavigationMenuContent, NavigationMenuViewport as NavigationMenuViewport, Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose, Select as Select, SelectTrigger as SelectTrigger, SelectValue as SelectValue, SelectContent as SelectContent, SelectViewport as SelectViewport, SelectItem as SelectItem, SelectItemIndicator as SelectItemIndicator, SelectItemText as SelectItemText } from "@webstudio-is/sdk-components-react-radix";


      export const siteName = undefined;

      export const favIconAsset: ImageAsset | undefined =
        undefined;

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: FontAsset[] =
        []

      export const pageBackgroundImageAssets: ImageAsset[] =
        []

      

      

      const Page = (_props: { system: any; }) => {
let [selectValue, set$selectValue] = useVariableState<any>("")
let [formState, set$formState] = useVariableState<any>("initial")
return <Body
className={`w-body`}>
<Slot>
<Fragment_1>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<style>\n    /* So we don't need to add a token to every paragraph to remove margin. */\n    p {\n        margin: 0;\n    }\n\n    * {\n        /* Make links scroll to their sections smoothly. */\n        scroll-behavior: smooth;\n    }\n\n    /* Nav Trigger show active when submenu is open. */\n    nav button[data-state=\"open\"] {\n        --navigation-menu-trigger-icon-transform: 180deg;\n        color: var(--foreground-muted);\n    }\n</style>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<style>\n:root {\n  --ani-duration: var(--duration-default, .2s);\n  --ani-delay: 0s;\n  --ani-slide-offset: 20%;\n  --ani-zoom-in-scale: 1;\n  --ani-zoom-out-scale: .85;\n  --ani-flip-rotate: 30deg;\n  --ani-easing: var(--easing-default, ease);\n  --ani-fill-mode: forwards;\n}\n[data-ani]:not([data-ani-children]),[data-ani-children]:not([data-ani-progress])>*{animation-duration:var(--ani-duration);animation-delay:var(--ani-delay);animation-timing-function:var(--ani-easing);animation-fill-mode:var(--ani-fill-mode);opacity:0}[data-ani-progress]:not([data-ani-children]),[data-ani-children]:not([data-ani])>*{transition-property:opacity,transform;transition-duration:var(--ani-duration);transition-timing-function:var(--ani-easing);opacity:0}\n@keyframes fadeIn{from{opacity:0}\nto{opacity:1}}\n@keyframes fadeOut{from{opacity:1}\nto{opacity:0}}[data-ani-children][data-ani='fade']>.in,[data-ani='fade']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:fadeIn}[data-ani-children][data-ani='fade']>.out,[data-ani='fade']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:fadeOut}\n@keyframes slideIn{from{opacity:0;translate:var(--ani-slide-transform)}\nto{opacity:1;translate:none}}\n@keyframes slideOut{from{opacity:1;translate:none}\nto{opacity:0;translate:var(--ani-slide-transform)}}[data-ani-children][data-ani|='slide']>.in,[data-ani|='slide']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:slideIn}[data-ani-children][data-ani|='slide']>.out,[data-ani|='slide']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:slideOut}[data-ani='slide-up']{--ani-slide-transform:0 var(--ani-slide-offset)}[data-ani='slide-down']{--ani-slide-transform:0 calc(-1*var(--ani-slide-offset))}[data-ani='slide-left']{--ani-slide-transform:var(--ani-slide-offset)}[data-ani='slide-right']{--ani-slide-transform:calc(-1*var(--ani-slide-offset))}\n@keyframes zoomIn{from{opacity:0;scale:var(--ani-zoom-out-scale)}\nto{opacity:1;scale:1}}\n@keyframes zoomOut{from{opacity:1;scale:1}\nto{opacity:0;scale:var(--ani-zoom-in-scale)}}[data-ani-children][data-ani='zoom']>.in,[data-ani|='zoom']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:zoomIn}[data-ani-children][data-ani='zoom']>.out,[data-ani|='zoom']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:zoomOut}[data-ani-children][data-ani-progress='zoom']>*,[data-ani-progress='zoom']:not([data-ani-children]){transform:scale(var(--ani-zoom-out-scale))}\n@keyframes flipInY{from{rotate:y var(--ani-flip-rotate);perspective:2000px;opacity:0}\nto{rotate:y 0;opacity:1}}\n@keyframes flipOutY{from{rotate:y 0;opacity:1}\nto{perspective:2000px;rotate:y var(--ani-flip-rotate);opacity:0}}\n@keyframes flipInX{from{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}\nto{rotate:x 0;opacity:1}}\n@keyframes flipOutX{from{rotate:x 0;opacity:1}\nto{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}}[data-ani-children][data-ani='flip-y']>.in,[data-ani='flip-y']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInY}[data-ani-children][data-ani='flip-x']>.in,[data-ani='flip-x']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInX}[data-ani-children][data-ani='flip-y']>.out,[data-ani='flip-y']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutY}[data-ani-children][data-ani='flip-x']>.out,[data-ani='flip-x']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutX}\n@keyframes expandDown{from{height:0}\nto{height:var(--newHeight)}}\n@keyframes expandUp{from{height:var(--newHeight)}\nto{height:0}}[data-ani='expand'],[data-ani='expand'][data-state='open'],[data-ani='expand'].in{--newHeight:var(--custom-height,var(--radix-accordion-content-height,var(--radix-collapsible-content-height,100%)));overflow:hidden;opacity:1}[data-ani-children][data-ani='expand']>.in,[data-ani='expand']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation:expandDown var(--ani-duration)var(--ani-easing)}[data-ani-children][data-ani='expand']>.out,[data-ani='expand']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation:expandUp var(--ani-duration)var(--ani-easing)}\n@media(prefers-reduced-motion:reduce){[data-ani]:not([data-ani-children]),[data-ani-progress]:not([data-ani-children]),[data-ani-children]>*{opacity:1;transform:none;animation:none;rotate:none;scale:none;translate:none}}\n</style>"}
className={`w-html-embed`} />
</Fragment_1>
</Slot>
<Box
tag={"header"}
className={`w-box c1lpmbvr c1rhajtw c12g22pm c1x38kgf c1fc00l cdb7l7w c1m0iipv c1h2j5hn c1n704d cl8tvtt c1tjxjp9 c1adqny3 cg6f78n c11az9g3 c1a4sexm c1tcpxlr c173xgzn cv7dw1t c1ru812e cta8nvm c1pmywsz`}>
<Slot>
<Fragment_1>
<Link
aria-label={"Home"}
className={`w-link c1uves7a cpfe5u7 cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh c1f3y4 c1i86v51 c1p0o0wq c13p5qav c1hbr8vz csvviyu cjgog48 c13fnuow cpegf2e ccpcu5x c1cj80ae c7avrz0 c1a8au9j cndzxgn c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx`}>
<Image
loading={"eager"}
alt={"Logo"}
src={"/assets/temp-logo_VoLGlBi1qX_cywG1xnlrv.svg"}
width={169}
height={40}
className={`w-image`} />
</Link>
</Fragment_1>
</Slot>
<Box
tag={"nav"}
aria-label={"main"}
className={`w-box c1udybau c1m0iipv c1g8nvc5 c9yfzrn c15fo2rq c1ohl2ak`}>
<NavigationMenu
className={`w-navigation-menu c12g22pm`}>
<NavigationMenuList
className={`w-menu-list c1udybau c9yfzrn ckhzizd c1omflmd codh9pd c1m0iipv c1g8nvc5 c1y8hsq3 c16w7v2z czjsvn5 c1w2mhee`}>
<NavigationMenuItem
data-ws-index="0"
className={`w-menu-item`}>
<NavigationMenuTrigger>
<Button
type={"button"}
className={`w-button c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1p0o0wq c13p5qav c1hbr8vz csvviyu cjgog48 c13fnuow cpegf2e ccpcu5x cvrbao cfy7o5s c1fgwgmi c1m0iipv c1g8nvc5 cpa60xb c1cj80ae c7avrz0 c1a8au9j cndzxgn c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx c1jugkq5`}>
<Text
className={`w-text`}>
{"About"}
</Text>
<Box
className={`w-box cuzccmy crzrrd3 c15fo2rq c7u74f5 c3lu1uc cgpcm6b c1a7yb1 c1rq8sjk c6rh7z8 c87374d`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"></path></svg>"}
className={`w-html-embed`} />
</Box>
</Button>
</NavigationMenuTrigger>
<NavigationMenuContent
data-ws-index="0"
className={`w-menu-content cmh16e5 c16occov c5zlccm c96x9a9 c1udybau c1n704d cl8tvtt c17p0rlk`}>
<Box
className={`w-box c1udybau cdb7l7w c1y8hsq3 c16w7v2z`}>
<Link
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1m0iipv c1h2j5hn c1y8hsq3 c16w7v2z c1dn2r4z cdnt313 c7nn81g c1d1wgtw c1xhoec7 ci496ge c1chvrhg c1cj80ae c7avrz0 c1a8au9j cndzxgn c1e8dyyi cdndav cup81nl c4ct8iy ct1778y cq9g8kk c1f2xltx`}>
<Box
className={`w-box cj3kd7x cafowf1 cvtfhg1 c1vl81c6 c1y7zlic ccp12hx c6rh7z8 c87374d c1chvrhg`}>
<HtmlEmbed
code={"<svg data-slot=\"icon\" width=\"100%\" height=\"100%\" fill=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n  <path clip-rule=\"evenodd\" fill-rule=\"evenodd\" d=\"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z\"></path>\n</svg>"}
className={`w-html-embed cvtfhg1`} />
</Box>
<Box
className={`w-box c1udybau cdb7l7w c1wmewxe c151fxgw cefss6g`}>
<Text
tag={"span"}
className={`w-text c9gb9mb`}>
{"Link text you can edit"}
</Text>
<Text
tag={"span"}
className={`w-text c1tu0ls4`}>
{"Link text you can edit"}
</Text>
</Box>
</Link>
<Link
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1m0iipv c1h2j5hn c1y8hsq3 c16w7v2z c1dn2r4z cdnt313 c7nn81g c1d1wgtw c1xhoec7 ci496ge c1chvrhg c1cj80ae c7avrz0 c1a8au9j cndzxgn c1e8dyyi cdndav cup81nl c4ct8iy ct1778y cq9g8kk c1f2xltx`}>
<Box
className={`w-box cj3kd7x cafowf1 cvtfhg1 c1vl81c6 c1y7zlic ccp12hx c6rh7z8 c87374d c1chvrhg`}>
<HtmlEmbed
code={"<svg data-slot=\"icon\" width=\"100%\" height=\"100%\" fill=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n  <path clip-rule=\"evenodd\" fill-rule=\"evenodd\" d=\"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z\"></path>\n</svg>"}
className={`w-html-embed cvtfhg1`} />
</Box>
<Box
className={`w-box c1udybau cdb7l7w c1wmewxe c151fxgw cefss6g`}>
<Text
tag={"span"}
className={`w-text c9gb9mb`}>
{"Link text you can edit"}
</Text>
<Text
tag={"span"}
className={`w-text c1tu0ls4`}>
{"Link text you can edit"}
</Text>
</Box>
</Link>
<Link
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1m0iipv c1h2j5hn c1y8hsq3 c16w7v2z c1dn2r4z cdnt313 c7nn81g c1d1wgtw c1xhoec7 ci496ge c1chvrhg c1cj80ae c7avrz0 c1a8au9j cndzxgn c1e8dyyi cdndav cup81nl c4ct8iy ct1778y cq9g8kk c1f2xltx`}>
<Box
className={`w-box cj3kd7x cafowf1 cvtfhg1 c1vl81c6 c1y7zlic ccp12hx c6rh7z8 c87374d c1chvrhg`}>
<HtmlEmbed
code={"<svg data-slot=\"icon\" width=\"100%\" height=\"100%\" fill=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n  <path clip-rule=\"evenodd\" fill-rule=\"evenodd\" d=\"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z\"></path>\n</svg>"}
className={`w-html-embed cvtfhg1`} />
</Box>
<Box
className={`w-box c1udybau cdb7l7w c1wmewxe c151fxgw cefss6g`}>
<Text
tag={"span"}
className={`w-text c9gb9mb`}>
{"Link text you can edit"}
</Text>
<Text
tag={"span"}
className={`w-text c1tu0ls4`}>
{"Link text you can edit"}
</Text>
</Box>
</Link>
</Box>
<Box
className={`w-box`}>
<Link
className={`w-link c1udybau cdb7l7w cw06hvq cgf5tfr c1e7wbyz chgdru c17dk2go cf8ie7v cpsmix7 c1t2c8d7 c1i86v51 c89xe4o c17pjzch c178c260 c8n0zg7 c67do6v c1q0c9a6 c2xr64q c1kdxer3 c1bxqqjg c1lamv12 cq9g8kk c1f2xltx`}>
<Box
className={`w-box c1udybau c1wmewxe c1h2j5hn cdb7l7w cgf5tfr c1e7wbyz`}>
<Heading
tag={"h3"}
className={`w-heading c12kyk05 c1kigl97 c1t63v45 c100q1g9 c89xe4o`}>
{"Heading text you can edit"}
</Heading>
</Box>
<Box
className={`w-box c1udybau cdb7l7w c1wmewxe c1h2j5hn cgf5tfr c1e7wbyz`}>
<Paragraph
className={`w-paragraph`}>
{"Paragraph text you can edit"}
</Paragraph>
</Box>
<Box
className={`w-box c1udybau cdb7l7w cgf5tfr c1e7wbyz c1wmewxe c1h2j5hn`}>
<Paragraph
className={`w-paragraph`}>
{"Paragraph text you can edit"}
</Paragraph>
</Box>
</Link>
</Box>
</NavigationMenuContent>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="1"
className={`w-menu-item`}>
<Link
href={"/about"}
className={`w-link c89xe4o c13l6j6w cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c1p0o0wq c13p5qav c1hbr8vz csvviyu cjgog48 c13fnuow cpegf2e ccpcu5x cvrbao cfy7o5s c1fgwgmi c1m0iipv c1g8nvc5 cpa60xb c1cj80ae c7avrz0 c1a8au9j cndzxgn c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx c1jugkq5`}>
{"About"}
</Link>
</NavigationMenuItem>
</NavigationMenuList>
<Box
className={`w-box c5zlccm cmh16e5 c1rfe2xs c1udybau c1g8nvc5 c1ynzq67 coipb23 c12nmjco`}>
<NavigationMenuViewport
data-ani={"zoom"}
className={`w-menu-viewport c173xgzn c4elmpc cgswr4a c1ibc57p c100yuk6 c3mcuba cpokqwt c1rj2al4 c1f12hhz cvy6s17 c4e00ut cmnq8po c1454brp c67do6v c1q0c9a6 c19db9fa`} />
</Box>
</NavigationMenu>
</Box>
<Box
className={`w-box c133d7eb`}>
<Slot>
<Fragment_1>
<Box
className={`w-box c1kqo2c4`}>
<Link
className={`w-link cxnq87h c5dowt2 c1mrtwt9 c1rlo8as c1xctwwi cnsc4l2 c100yuk6 c3mcuba cpokqwt c1rj2al4 c1i86v51 c13l6j6w c1m0iipv c1g8nvc5 cfy7o5s c1fgwgmi c1u1vn1i c9gb9mb cw9af8z c8fp8nh c1gz7ci1 c1czcm6x cwrqs5z cjq1q2o c1cj80ae c7avrz0 cq9g8kk c1f2xltx c1omo28s`}>
{"Lorem"}
</Link>
</Box>
</Fragment_1>
</Slot>
</Box>
<Box
className={`w-box cr44u0a ckjiuoi`}>
<Dialog>
<DialogTrigger>
<Button
aria-label={"Open mobile menu"}
type={"button"}
className={`w-button cxnq87h c5dowt2 c1mrtwt9 c1rlo8as c1xctwwi cnsc4l2 c100yuk6 c3mcuba cpokqwt c1rj2al4 c1i86v51 c13l6j6w c1m0iipv c1g8nvc5 cfy7o5s c1fgwgmi c1u1vn1i c9gb9mb cw9af8z c8fp8nh c1gz7ci1 c1czcm6x cwrqs5z cjq1q2o c1cj80ae c7avrz0 cq9g8kk c1f2xltx c1omo28s c1clw8ur c19h13bs c1l8viig c1akzw89 c1do4smn c1c0mf86 cfapqxy c131nso8 c19fv0we c1rmams5 c19ws7q`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed`} />
</Button>
</DialogTrigger>
<DialogOverlay
data-ani={"fade"}
className={`w-dialog-overlay cdb7l7w c1oetcv7 cz4qkvw csh5qlw c1qvqkbl c138o39y c1cnpxxy c11b36fz c15q5gn9 cv7dw1t c1iutj8u ctkomec`}>
<DialogContent
className={`w-dialog-content c9yfzrn cv7dw1t c1eivms7 c8uq6m6 c1iutj8u ce1hk9r c161vlbh cyt0ldx cgbsof4 cvlv4hp clid8v8`}>
<Box
className={`w-box cv7dw1t c1pmywsz cta8nvm`}>
<Slot>
<Fragment_1>
<Link
aria-label={"Home"}
className={`w-link c1uves7a cpfe5u7 cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh c1f3y4 c1i86v51 c1p0o0wq c13p5qav c1hbr8vz csvviyu cjgog48 c13fnuow cpegf2e ccpcu5x c1cj80ae c7avrz0 c1a8au9j cndzxgn c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx`}>
<Image
loading={"eager"}
alt={"Logo"}
src={"/assets/temp-logo_VoLGlBi1qX_cywG1xnlrv.svg"}
width={169}
height={40}
className={`w-image`} />
</Link>
</Fragment_1>
</Slot>
<DialogClose
aria-label={"Close mobile menu"}
className={`w-close-button cxnq87h c5dowt2 c1mrtwt9 c1rlo8as c1xctwwi cnsc4l2 c100yuk6 c3mcuba cpokqwt c1rj2al4 c1i86v51 c13l6j6w c1m0iipv c1g8nvc5 cfy7o5s c1fgwgmi c1u1vn1i c9gb9mb cw9af8z c8fp8nh c1gz7ci1 c1czcm6x cwrqs5z cjq1q2o c1cj80ae c7avrz0 cq9g8kk c1f2xltx c1omo28s c1clw8ur c19h13bs c1l8viig c1akzw89 c1do4smn c1c0mf86 cfapqxy c131nso8 c19fv0we c1rmams5 c19ws7q`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed`} />
</DialogClose>
</Box>
<Box
tag={"nav"}
aria-label={"Main mobile"}
className={`w-box cv7dw1t cta8nvm cij2vpw c9n5525 c1iutj8u`}>
<List
className={`w-list cv7dw1t c1iutj8u c1x8968j c3nmkew c1jk4pdt ca62g9q c19gfsua`}>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link c1uves7a cpfe5u7 cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c3dz7um cwrin8p c1yiy7h5 c10wqjz5 cjgog48 c13fnuow cpegf2e ccpcu5x c1cj80ae c7avrz0 c1a8au9j cn52n7a c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx`}>
{"Lorem ipsum"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link c1uves7a cpfe5u7 cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c3dz7um cwrin8p c1yiy7h5 c10wqjz5 cjgog48 c13fnuow cpegf2e ccpcu5x c1cj80ae c7avrz0 c1a8au9j cn52n7a c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx`}>
{"Lorem ipsum"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link c1uves7a cpfe5u7 cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c3dz7um cwrin8p c1yiy7h5 c10wqjz5 cjgog48 c13fnuow cpegf2e ccpcu5x c1cj80ae c7avrz0 c1a8au9j cn52n7a c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx`}>
{"Lorem ipsum"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link c1uves7a cpfe5u7 cz0yq6k cn7yu1g c1tfmy6j cb74049 c15ylyjh cf7tkpb c1i86v51 c3dz7um cwrin8p c1yiy7h5 c10wqjz5 cjgog48 c13fnuow cpegf2e ccpcu5x c1cj80ae c7avrz0 c1a8au9j cn52n7a c1gvhmq2 c13u7339 c1wegi2a c165qy47 cq9g8kk c1f2xltx`}>
{"Lorem ipsum"}
</Link>
</ListItem>
</List>
</Box>
<Box
className={`w-box c1m2utyf`}>
<Slot>
<Fragment_1>
<Box
className={`w-box c1kqo2c4`}>
<Link
className={`w-link cxnq87h c5dowt2 c1mrtwt9 c1rlo8as c1xctwwi cnsc4l2 c100yuk6 c3mcuba cpokqwt c1rj2al4 c1i86v51 c13l6j6w c1m0iipv c1g8nvc5 cfy7o5s c1fgwgmi c1u1vn1i c9gb9mb cw9af8z c8fp8nh c1gz7ci1 c1czcm6x cwrqs5z cjq1q2o c1cj80ae c7avrz0 cq9g8kk c1f2xltx c1omo28s`}>
{"Lorem"}
</Link>
</Box>
</Fragment_1>
</Slot>
</Box>
</DialogContent>
</DialogOverlay>
</Dialog>
</Box>
</Box>
</Fragment_1>
</Slot>
<Box
tag={"section"}
className={`w-box c7xrg0i c1lghw34`}>
<Box
className={`w-box c1lpmbvr c1rhajtw c12g22pm c1x38kgf c1udybau cdb7l7w c157lt0s c1h2j5hn c12t8dnv c1lia5n c1tjxjp9 c1adqny3`}>
<Form
state={formState}
onStateChange={(state: any) => {
formState = state
set$formState(formState)
}}
className={`w-webhook-form cmyj6n8`}>
{(formState === 'initial' || formState === 'error') &&
<Box
className={`w-box c1udybau cdb7l7w c1n704d cl8tvtt`}>
<Box
className={`w-box c1udybau cdb7l7w cgf5tfr c1e7wbyz c1iutj8u`}>
<Box
className={`w-box c1udybau c157lt0s c1h2j5hn cdb7l7w cfy7o5s c1fgwgmi c9yfzrn c15fo2rq c173xgzn c1ynzq67 coipb23 cr8q1yd c1gr8wku c176pu3l cf0hq4b c1bvwpad c6lxwrv ck7w627 c16iuvyg`}>
<Input
placeholder={"Full name"}
required={true}
name={"name"}
id={"inputName"}
aria-label={"full name"}
className={`w-text-input cqb1aj5 cwjomvp cm8jb7u chnpkmn c1by45it c5trdho c1ss55io ch19w8g cpa60xb c12cvy4e c1xecqom c1cj80ae c1f3dw8r c15j570o c1omxgwa c1uvi706 ccpng4v c1kskyhn c197lyv0`} />
<Box
className={`w-box c5zlccm c16occov cmh16e5 cvy6s17 cs3dvlt civdyaj cj3kd7x c1udybau c1m0iipv c1g8nvc5 c1a4o0cs clf4xn4 ce7yzbw c15oor8 c1tix3ko`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11 1.146C9.84521 1.146 8.73771 1.60474 7.92115 2.4213C7.10459 3.23787 6.64584 4.34537 6.64584 5.50016C6.64584 6.65496 7.10459 7.76246 7.92115 8.57902C8.73771 9.39559 9.84521 9.85433 11 9.85433C12.1548 9.85433 13.2623 9.39559 14.0789 8.57902C14.8954 7.76246 15.3542 6.65496 15.3542 5.50016C15.3542 4.34537 14.8954 3.23787 14.0789 2.4213C13.2623 1.60474 12.1548 1.146 11 1.146ZM8.02084 5.50016C8.02084 4.71004 8.33472 3.95228 8.89342 3.39357C9.45212 2.83487 10.2099 2.521 11 2.521C11.7901 2.521 12.5479 2.83487 13.1066 3.39357C13.6653 3.95228 13.9792 4.71004 13.9792 5.50016C13.9792 6.29029 13.6653 7.04805 13.1066 7.60675C12.5479 8.16545 11.7901 8.47933 11 8.47933C10.2099 8.47933 9.45212 8.16545 8.89342 7.60675C8.33472 7.04805 8.02084 6.29029 8.02084 5.50016ZM11 11.2293C8.87976 11.2293 6.92543 11.7115 5.47801 12.5255C4.05168 13.3285 2.97918 14.544 2.97918 16.0418V16.1353C2.97826 17.2005 2.97734 18.537 4.14976 19.4922C4.72634 19.9615 5.53393 20.2961 6.62476 20.5161C7.71743 20.7379 9.14284 20.8543 11 20.8543C12.8572 20.8543 14.2817 20.7379 15.3762 20.5161C16.467 20.2961 17.2737 19.9615 17.8512 19.4922C19.0236 18.537 19.0218 17.2005 19.0208 16.1353V16.0418C19.0208 14.544 17.9483 13.3285 16.5229 12.5255C15.0746 11.7115 13.1212 11.2293 11 11.2293ZM4.35418 16.0418C4.35418 15.2617 4.92434 14.4147 6.15176 13.7245C7.35809 13.0462 9.07043 12.6043 11.0009 12.6043C12.9296 12.6043 14.6419 13.0462 15.8483 13.7245C17.0766 14.4147 17.6458 15.2617 17.6458 16.0418C17.6458 17.2408 17.6092 17.9155 16.9822 18.4252C16.643 18.702 16.0747 18.9724 15.103 19.1686C14.1341 19.3647 12.8095 19.4793 11 19.4793C9.19051 19.4793 7.86501 19.3647 6.89701 19.1686C5.92534 18.9724 5.35701 18.702 5.01784 18.4261C4.39084 17.9155 4.35418 17.2408 4.35418 16.0418Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
</Box>
<Box
className={`w-box c1udybau c157lt0s c1h2j5hn cdb7l7w cfy7o5s c1fgwgmi c9yfzrn c15fo2rq c173xgzn c1ynzq67 coipb23 cr8q1yd c1gr8wku c176pu3l cf0hq4b c1bvwpad c6lxwrv ck7w627 c16iuvyg`}>
<Input
placeholder={"Email address"}
required={true}
name={"email"}
id={"inputEmail"}
type={"email"}
aria-label={"email"}
className={`w-text-input cqb1aj5 cwjomvp cm8jb7u chnpkmn c1by45it c5trdho c1ss55io ch19w8g cpa60xb c12cvy4e c1xecqom c1cj80ae c1f3dw8r c15j570o c1omxgwa c1uvi706 ccpng4v c1kskyhn c197lyv0`} />
<Box
className={`w-box c5zlccm c16occov cmh16e5 cvy6s17 cs3dvlt civdyaj cj3kd7x c1udybau c1m0iipv c1g8nvc5 c1a4o0cs clf4xn4 ce7yzbw c15oor8 c1tix3ko`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M19.25 4.125H2.75C2.38533 4.125 2.03559 4.26987 1.77773 4.52773C1.51987 4.78559 1.375 5.13533 1.375 5.5V16.5C1.375 16.8647 1.51987 17.2144 1.77773 17.4723C2.03559 17.7301 2.38533 17.875 2.75 17.875H19.25C19.6147 17.875 19.9644 17.7301 20.2223 17.4723C20.4801 17.2144 20.625 16.8647 20.625 16.5V5.5C20.625 5.13533 20.4801 4.78559 20.2223 4.52773C19.9644 4.26987 19.6147 4.125 19.25 4.125ZM17.7375 5.5L11 10.1612L4.2625 5.5H17.7375ZM2.75 16.5V6.12562L10.6081 11.5637C10.7232 11.6436 10.8599 11.6864 11 11.6864C11.1401 11.6864 11.2768 11.6436 11.3919 11.5637L19.25 6.12562V16.5H2.75Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
</Box>
<Box
className={`w-box c1udybau c157lt0s c1h2j5hn cdb7l7w cfy7o5s c1fgwgmi c9yfzrn c15fo2rq c173xgzn c1ynzq67 coipb23 cr8q1yd c1gr8wku c176pu3l cf0hq4b c1bvwpad c6lxwrv ck7w627 c16iuvyg`}>
<Input
placeholder={"Phone number"}
required={true}
name={"phone"}
id={"inputPhone"}
type={"text"}
aria-label={"phone number"}
className={`w-text-input cqb1aj5 cwjomvp cm8jb7u chnpkmn c1by45it c5trdho c1ss55io ch19w8g cpa60xb c12cvy4e c1xecqom c1cj80ae c1f3dw8r c15j570o c1omxgwa c1uvi706 ccpng4v c1kskyhn c197lyv0`} />
<Box
className={`w-box c5zlccm c16occov cmh16e5 cvy6s17 cs3dvlt civdyaj cj3kd7x c1udybau c1m0iipv c1g8nvc5 c1a4o0cs clf4xn4 ce7yzbw c15oor8 c1tix3ko`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M19.25 15.0517V18.293C19.2501 18.5251 19.1622 18.7486 19.004 18.9183C18.8457 19.0881 18.629 19.1916 18.3975 19.2078C17.9969 19.2353 17.6697 19.25 17.4167 19.25C9.31608 19.25 2.75 12.6839 2.75 4.58333C2.75 4.33033 2.76375 4.00308 2.79217 3.6025C2.80841 3.37099 2.91187 3.15426 3.08165 2.99604C3.25144 2.83782 3.47492 2.7499 3.707 2.75H6.94833C7.06204 2.74989 7.17172 2.79204 7.25608 2.86827C7.34045 2.9445 7.39346 3.04937 7.40483 3.1625C7.42592 3.37333 7.44517 3.54108 7.4635 3.6685C7.64567 4.93985 8.019 6.17635 8.57083 7.33608C8.65792 7.51942 8.60108 7.7385 8.43608 7.85583L6.45792 9.26933C7.66742 12.0876 9.91334 14.3335 12.7316 15.543L14.1432 13.5685C14.201 13.4878 14.2851 13.43 14.3811 13.405C14.4771 13.3801 14.5788 13.3896 14.6685 13.4319C15.8281 13.9828 17.0643 14.3552 18.3352 14.5365C18.4626 14.5548 18.6303 14.5741 18.8393 14.5952C18.9523 14.6067 19.0569 14.6599 19.133 14.7442C19.209 14.8285 19.2501 14.9381 19.25 15.0517Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
</Box>
<Box
className={`w-box c1udybau c157lt0s c1h2j5hn cdb7l7w cfy7o5s c1fgwgmi c9yfzrn c15fo2rq c173xgzn c1ynzq67 coipb23 cr8q1yd c1gr8wku c176pu3l cf0hq4b c1bvwpad c6lxwrv ck7w627 c16iuvyg`}>
<Select
value={selectValue}
onValueChange={(value: any) => {
selectValue = value
set$selectValue(selectValue)
}}
name={"service"}
required={true}>
<SelectTrigger
aria-label={"select service"}
className={`w-select-trigger cqb1aj5 cwjomvp cm8jb7u chnpkmn c1by45it c5trdho c1ss55io ch19w8g cpa60xb c12cvy4e c13l6j6w c1m0iipv cw06hvq c1xecqom c1cj80ae c1f3dw8r c15j570o c1omxgwa c1uvi706 ccpng4v c1kskyhn c197lyv0`}>
<SelectValue
placeholder={"Select service"}
className={`w-value c1tu0ls4`} />
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12.6 4.8999L7.00002 10.1499L1.40002 4.8999\" stroke=\"#141414\" stroke-opacity=\"0.7\" stroke-width=\"1.8\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n"}
className={`w-html-embed c7u74f5 cpfe5u7 c3lu1uc c1pa7jak`} />
</SelectTrigger>
<SelectContent
className={`w-select-content c173xgzn cdc9rg c1ynzq67 coipb23 cmyj6n8 c1f12hhz c1by45it c5trdho c1ss55io ch19w8g cunx3kv c1chvrhg`}>
<SelectViewport
className={`w-select-viewport c189l9t0 c12g22pm cmmtunh`}>
<SelectItem
value={"service-a"}
className={`w-select-item c173xgzn c12g22pm c1a00v4c c1ptpchd cvcho2j cem8ez4 c1r6pptk c14rot9b c1mrtwt9 c1rlo8as c117gidx c1t7379u c1y99hv c8h36tq c10hl6nl cf2ycs1`}>
<SelectItemIndicator
className={`w-indicator c5zlccm c1y9fiv9 c1udybau c1m0iipv c1g8nvc5 c7u74f5 c3lu1uc`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M11.957 5.043a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.75 8.836l3.793-3.793a1 1 0 0 1 1.414 0Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed`} />
</SelectItemIndicator>
<SelectItemText
className={`w-item-text`}>
{"Service A"}
</SelectItemText>
</SelectItem>
<SelectItem
value={"service-b"}
className={`w-select-item c173xgzn c12g22pm c1a00v4c c1ptpchd cvcho2j cem8ez4 c1r6pptk c14rot9b c1mrtwt9 c1rlo8as c117gidx c1t7379u c1y99hv c8h36tq c10hl6nl cf2ycs1`}>
<SelectItemIndicator
className={`w-indicator c5zlccm c1y9fiv9 c1udybau c1m0iipv c1g8nvc5 c7u74f5 c3lu1uc`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M11.957 5.043a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.75 8.836l3.793-3.793a1 1 0 0 1 1.414 0Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed`} />
</SelectItemIndicator>
<SelectItemText
className={`w-item-text`}>
{"Service B"}
</SelectItemText>
</SelectItem>
<SelectItem
value={"service-c"}
className={`w-select-item c173xgzn c12g22pm c1a00v4c c1ptpchd cvcho2j cem8ez4 c1r6pptk c14rot9b c1mrtwt9 c1rlo8as c117gidx c1t7379u c1y99hv c8h36tq c10hl6nl cf2ycs1`}>
<SelectItemIndicator
className={`w-indicator c5zlccm c1y9fiv9 c1udybau c1m0iipv c1g8nvc5 c7u74f5 c3lu1uc`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M11.957 5.043a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.75 8.836l3.793-3.793a1 1 0 0 1 1.414 0Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed`} />
</SelectItemIndicator>
<SelectItemText
className={`w-item-text`}>
{"Service C"}
</SelectItemText>
</SelectItem>
</SelectViewport>
</SelectContent>
</Select>
<Box
className={`w-box c5zlccm c16occov cmh16e5 cvy6s17 cs3dvlt civdyaj cj3kd7x c1udybau c1m0iipv c1g8nvc5 c1a4o0cs clf4xn4 ce7yzbw c15oor8 c1tix3ko`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14.7812 1.71875V2.68537C14.2176 2.78217 13.6823 3.00238 13.2137 3.33025L12.5042 2.66338L11.5589 3.674L12.2464 4.31819C11.9319 4.77654 11.7193 5.29698 11.6228 5.84444H10.6562V7.21944H11.6228C11.7232 7.79006 11.9487 8.30981 12.2677 8.76631L11.5369 9.47444L12.5269 10.4644L13.235 9.73294C13.6915 10.0519 14.2113 10.2774 14.7819 10.3778V11.3438H16.1569V10.3771C16.7043 10.2809 17.2248 10.0685 17.6832 9.75425L18.3267 10.4417L19.3373 9.49575L18.6704 8.78762C18.9935 8.327 19.2135 7.79419 19.3153 7.21875H20.2812V5.84375H19.3146C19.2156 5.28708 18.9955 4.75899 18.6697 4.29688L19.3146 3.652L18.3473 2.68537L17.7031 3.33025C17.241 3.00449 16.7129 2.78433 16.1562 2.68537V1.71875H14.7812ZM15.4687 3.99644C15.8022 3.99425 16.1329 4.05831 16.4414 4.18491C16.75 4.31151 17.0304 4.49813 17.2662 4.73394C17.5021 4.96975 17.6888 5.25005 17.8155 5.55858C17.9422 5.86711 18.0063 6.19773 18.0042 6.53125C18.0042 7.94406 16.8815 9.06675 15.4687 9.06675C14.0559 9.06675 12.9332 7.94406 12.9332 6.53125C12.9332 5.11844 14.0559 3.99575 15.4687 3.99575V3.99644ZM6.55185 8.05613L5.28547 8.57175L5.7791 9.81612C5.122 10.2094 4.56925 10.755 4.1676 11.407L2.94385 10.912L2.42822 12.1804L3.65197 12.6741C3.55539 13.046 3.50505 13.4283 3.5021 13.8126C3.5021 14.2044 3.56053 14.5867 3.65197 14.9511L2.42822 15.4461L2.94385 16.7131L4.1676 16.2181C4.56559 16.8786 5.11876 17.432 5.7791 17.8303L5.2841 19.0541L6.55254 19.5697L7.04754 18.3459C7.41938 18.4428 7.8018 18.4931 8.18604 18.4958C8.57791 18.4958 8.96154 18.4374 9.32454 18.3459L9.81953 19.5697L11.0866 19.0541L10.5916 17.8303C11.244 17.4292 11.7898 16.8764 12.1825 16.2188L13.4268 16.7124L13.9425 15.4454L12.6981 14.9504C12.7875 14.586 12.848 14.2031 12.848 13.8119C12.848 13.42 12.7882 13.0364 12.6967 12.6727L13.9432 12.1791L13.4275 10.9106L12.1832 11.4056C11.7883 10.7553 11.2426 10.2096 10.5923 9.81475L11.0873 8.57037L9.81885 8.05475L9.32591 9.29913C8.95368 9.20316 8.57111 9.15306 8.18672 9.14994C7.79485 9.14994 7.4126 9.20906 7.04822 9.29981L6.55322 8.05544L6.55185 8.05613ZM8.18535 10.5256C10.0162 10.5256 11.4716 11.9831 11.4716 13.8132C11.473 15.6441 10.0162 17.1215 8.18535 17.1215C7.75075 17.122 7.32031 17.0368 6.91869 16.8708C6.51707 16.7047 6.15216 16.4611 5.84485 16.1537C5.53754 15.8464 5.29388 15.4815 5.12782 15.0799C4.96175 14.6783 4.87655 14.2478 4.8771 13.8132C4.8771 11.9824 6.35522 10.5256 8.18535 10.5256Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
</Box>
<Box
className={`w-box c1udybau c157lt0s c1h2j5hn cdb7l7w cfy7o5s c1fgwgmi c9yfzrn c15fo2rq c173xgzn c1ynzq67 coipb23 cr8q1yd c1gr8wku c176pu3l cf0hq4b c1bvwpad c6lxwrv ck7w627 c16iuvyg`}>
<Input
placeholder={""}
required={true}
name={"date"}
id={"inputDate"}
type={"date"}
aria-label={"desired date"}
className={`w-text-input cqb1aj5 cwjomvp cm8jb7u chnpkmn c1by45it c5trdho c1ss55io ch19w8g cpa60xb c12cvy4e c1xecqom c1cj80ae c1f3dw8r c15j570o c1omxgwa c1uvi706 ccpng4v c1kskyhn c197lyv0`} />
<Box
className={`w-box c5zlccm c16occov cmh16e5 cvy6s17 cs3dvlt civdyaj cj3kd7x c1udybau c1m0iipv c1g8nvc5 c1a4o0cs clf4xn4 ce7yzbw c15oor8 c1tix3ko`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M11 2.75C6.44531 2.75 2.75 6.44531 2.75 11C2.75 15.5547 6.44531 19.25 11 19.25C15.5547 19.25 19.25 15.5547 19.25 11C19.25 6.44531 15.5547 2.75 11 2.75Z\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-miterlimit=\"10\"></path>\n<path d=\"M11 5.5V11.6875H15.125\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
</Box>
</Box>
<Button
className={`w-button cxnq87h c5dowt2 c1mrtwt9 c1rlo8as c1xctwwi cnsc4l2 c100yuk6 c3mcuba cpokqwt c1rj2al4 c1i86v51 c13l6j6w c1m0iipv c1g8nvc5 cfy7o5s c1fgwgmi c1u1vn1i c9gb9mb cw9af8z c8fp8nh c1gz7ci1 c1czcm6x cwrqs5z cjq1q2o c1cj80ae c7avrz0 cq9g8kk c1f2xltx c1omo28s`}>
{"Submit"}
</Button>
</Box>
}
{(formState === 'success') &&
<Box
className={`w-box`}>
{"Thank you for getting in touch!"}
</Box>
}
{(formState === 'error') &&
<Box
className={`w-box c1hzkj2m`}>
{"Sorry, something went wrong."}
</Box>
}
</Form>
</Box>
</Box>
<Box
tag={"section"}
id={"testimonials"}
className={`w-box c7xrg0i c1lghw34 cjme612 c1ynzq67 coipb23 c1udybau cdb7l7w c12t8dnv c1lia5n`}>
<Box
className={`w-box c1lpmbvr c1rhajtw c12g22pm c1x38kgf c1udybau cdb7l7w c157lt0s c1h2j5hn c12t8dnv c1lia5n c1tjxjp9 c1adqny3`}>
<Box
className={`w-box c1udybau cdb7l7w cl8tvtt c1n704d c1m0iipv c1h2j5hn c1u1vn1i`}>
<Heading
tag={"h2"}
className={`w-heading c1e63t0d c1kigl97 c1t63v45 c100q1g9 c89xe4o cmuga36 c15yuch0`}>
{"Testimonials"}
</Heading>
<Paragraph
className={`w-paragraph ciws6gk cl4ieyv c1tu0ls4 c15yuch0`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box c173xgzn ci401vu cstplcy c1udybau cdb7l7w c1n704d cl8tvtt c19e53po cfyh32f cgbsof4 c161vlbh`}>
<Box
className={`w-box c1fc00l c1n704d cl8tvtt cjxylcb c11az9g3 c1ciau3r cv7dw1t c1iutj8u`}>
<Fragment_1>
<Box
className={`w-box c1udybau cdb7l7w cw06hvq cgf5tfr c1e7wbyz chgdru c17dk2go cf8ie7v cpsmix7 c1t2c8d7 c2xr64q c1kdxer3`}>
<Paragraph
className={`w-paragraph`}>
{"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\""}
</Paragraph>
<Separator
className={`w-separator c1x0kqow c12g22pm c1t63v45 c100q1g9`} />
<Box
className={`w-box c1udybau cjdoc0u cgf5tfr c1e7wbyz c1m0iipv c1h2j5hn`}>
<Image
alt={"Emily Doe"}
src={"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg"}
width={100}
height={100}
className={`w-image chfm7fa c1cw79vu c1y4m3nl cntvrbz cxaipdf c11kwm39 cz288c9 clzlznf`} />
<Box
className={`w-box c1udybau cdb7l7w c1y8hsq3 c16w7v2z`}>
<Text
className={`w-text c9gb9mb`}>
{"Emily Doe, CEO of ACME"}
</Text>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg aria-hidden=\"true\" viewBox=\"0 0 265 38\" height=\"100%\" width=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M28.766 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.702 2.702 0 0 0-3.188 0l-5.576 4.051a3.937 3.937 0 0 1-6.058-4.4l2.13-6.556a2.705 2.705 0 0 0-.985-3.032L1.623 18.27a3.936 3.936 0 0 1 2.313-7.12h6.893a2.705 2.705 0 0 0 2.58-1.874l2.129-6.556a3.936 3.936 0 0 1 7.488 0l2.13 6.556a2.705 2.705 0 0 0 2.579 1.873h6.893a3.937 3.937 0 0 1 2.313 7.121l-5.576 4.052a2.705 2.705 0 0 0-.985 3.032l2.13 6.555a3.877 3.877 0 0 1-1.43 4.401c-.67.495-1.48.763-2.314.766ZM85.328 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.702 2.702 0 0 0-3.187 0l-5.577 4.051a3.937 3.937 0 0 1-6.058-4.4l2.13-6.556a2.705 2.705 0 0 0-.985-3.032l-5.576-4.052a3.936 3.936 0 0 1 2.314-7.12h6.893a2.705 2.705 0 0 0 2.578-1.874L72.1 2.72a3.937 3.937 0 0 1 7.488 0l2.13 6.556a2.706 2.706 0 0 0 2.58 1.873h6.892a3.937 3.937 0 0 1 2.314 7.121l-5.577 4.052a2.706 2.706 0 0 0-.985 3.032l2.13 6.555a3.878 3.878 0 0 1-1.43 4.401c-.67.495-1.48.763-2.314.766ZM141.895 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.708 2.708 0 0 0-3.188 0l-5.576 4.051a3.939 3.939 0 0 1-6.058-1.968 3.935 3.935 0 0 1 0-2.433l2.13-6.555a2.706 2.706 0 0 0-.985-3.032l-5.577-4.052a3.932 3.932 0 0 1-1.429-4.4 3.934 3.934 0 0 1 3.743-2.72h6.893a2.708 2.708 0 0 0 2.579-1.874l2.13-6.556a3.935 3.935 0 0 1 7.488 0l2.13 6.556a2.701 2.701 0 0 0 2.579 1.873h6.892a3.934 3.934 0 0 1 3.744 5.153 3.934 3.934 0 0 1-1.43 1.968l-5.576 4.052a2.707 2.707 0 0 0-.985 3.032l2.13 6.555a3.876 3.876 0 0 1-1.43 4.401 3.927 3.927 0 0 1-2.314.766ZM198.458 37.076a3.923 3.923 0 0 1-2.314-.766l-5.577-4.051a2.698 2.698 0 0 0-3.187 0l-5.577 4.051a3.934 3.934 0 0 1-6.057-1.968 3.942 3.942 0 0 1-.001-2.433l2.131-6.555a2.705 2.705 0 0 0-.986-3.032l-5.576-4.052a3.935 3.935 0 0 1 0-6.369 3.94 3.94 0 0 1 2.314-.752h6.893a2.704 2.704 0 0 0 2.579-1.873l2.129-6.556A3.941 3.941 0 0 1 188.973 0a3.934 3.934 0 0 1 3.744 2.72l2.13 6.556a2.707 2.707 0 0 0 2.579 1.873h6.893a3.94 3.94 0 0 1 3.744 2.72 3.94 3.94 0 0 1-1.43 4.401l-5.577 4.052a2.705 2.705 0 0 0-.985 3.032l2.131 6.555a3.884 3.884 0 0 1-1.431 4.401 3.92 3.92 0 0 1-2.313.766ZM255.02 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.704 2.704 0 0 0-3.188 0l-5.576 4.051a3.937 3.937 0 0 1-6.058-4.4l2.13-6.556a2.705 2.705 0 0 0-.985-3.032l-5.577-4.052a3.933 3.933 0 0 1-1.429-4.4 3.934 3.934 0 0 1 3.743-2.72h6.893a2.707 2.707 0 0 0 2.579-1.874l2.13-6.556a3.935 3.935 0 0 1 7.488 0l2.13 6.556a2.701 2.701 0 0 0 2.579 1.873h6.892a3.935 3.935 0 0 1 3.744 5.153 3.935 3.935 0 0 1-1.43 1.968l-5.576 4.052a2.707 2.707 0 0 0-.985 3.032l2.13 6.555a3.877 3.877 0 0 1-1.43 4.401 3.924 3.924 0 0 1-2.314.766Z\" fill=\"currentColor\"></path></svg>"}
className={`w-html-embed c1g9ho3y cs3dvlt c1wj3u2d cr3oe4d`} />
</Fragment_1>
</Slot>
</Box>
</Box>
</Box>
</Fragment_1>
<Fragment_1>
<Box
className={`w-box c1udybau cdb7l7w cw06hvq cgf5tfr c1e7wbyz chgdru c17dk2go cf8ie7v cpsmix7 c1t2c8d7 c2xr64q c1kdxer3`}>
<Paragraph
className={`w-paragraph`}>
{"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\""}
</Paragraph>
<Separator
className={`w-separator c1x0kqow c12g22pm c1t63v45 c100q1g9`} />
<Box
className={`w-box c1udybau cjdoc0u cgf5tfr c1e7wbyz c1m0iipv c1h2j5hn`}>
<Image
alt={"Emily Doe"}
src={"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg"}
width={100}
height={100}
loading={"lazy"}
className={`w-image chfm7fa c1cw79vu c1y4m3nl cntvrbz cxaipdf c11kwm39 cz288c9 clzlznf`} />
<Box
className={`w-box c1udybau cdb7l7w c1y8hsq3 c16w7v2z`}>
<Text
className={`w-text c9gb9mb`}>
{"Emily Doe, CEO of ACME"}
</Text>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg aria-hidden=\"true\" viewBox=\"0 0 265 38\" height=\"100%\" width=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M28.766 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.702 2.702 0 0 0-3.188 0l-5.576 4.051a3.937 3.937 0 0 1-6.058-4.4l2.13-6.556a2.705 2.705 0 0 0-.985-3.032L1.623 18.27a3.936 3.936 0 0 1 2.313-7.12h6.893a2.705 2.705 0 0 0 2.58-1.874l2.129-6.556a3.936 3.936 0 0 1 7.488 0l2.13 6.556a2.705 2.705 0 0 0 2.579 1.873h6.893a3.937 3.937 0 0 1 2.313 7.121l-5.576 4.052a2.705 2.705 0 0 0-.985 3.032l2.13 6.555a3.877 3.877 0 0 1-1.43 4.401c-.67.495-1.48.763-2.314.766ZM85.328 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.702 2.702 0 0 0-3.187 0l-5.577 4.051a3.937 3.937 0 0 1-6.058-4.4l2.13-6.556a2.705 2.705 0 0 0-.985-3.032l-5.576-4.052a3.936 3.936 0 0 1 2.314-7.12h6.893a2.705 2.705 0 0 0 2.578-1.874L72.1 2.72a3.937 3.937 0 0 1 7.488 0l2.13 6.556a2.706 2.706 0 0 0 2.58 1.873h6.892a3.937 3.937 0 0 1 2.314 7.121l-5.577 4.052a2.706 2.706 0 0 0-.985 3.032l2.13 6.555a3.878 3.878 0 0 1-1.43 4.401c-.67.495-1.48.763-2.314.766ZM141.895 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.708 2.708 0 0 0-3.188 0l-5.576 4.051a3.939 3.939 0 0 1-6.058-1.968 3.935 3.935 0 0 1 0-2.433l2.13-6.555a2.706 2.706 0 0 0-.985-3.032l-5.577-4.052a3.932 3.932 0 0 1-1.429-4.4 3.934 3.934 0 0 1 3.743-2.72h6.893a2.708 2.708 0 0 0 2.579-1.874l2.13-6.556a3.935 3.935 0 0 1 7.488 0l2.13 6.556a2.701 2.701 0 0 0 2.579 1.873h6.892a3.934 3.934 0 0 1 3.744 5.153 3.934 3.934 0 0 1-1.43 1.968l-5.576 4.052a2.707 2.707 0 0 0-.985 3.032l2.13 6.555a3.876 3.876 0 0 1-1.43 4.401 3.927 3.927 0 0 1-2.314.766ZM198.458 37.076a3.923 3.923 0 0 1-2.314-.766l-5.577-4.051a2.698 2.698 0 0 0-3.187 0l-5.577 4.051a3.934 3.934 0 0 1-6.057-1.968 3.942 3.942 0 0 1-.001-2.433l2.131-6.555a2.705 2.705 0 0 0-.986-3.032l-5.576-4.052a3.935 3.935 0 0 1 0-6.369 3.94 3.94 0 0 1 2.314-.752h6.893a2.704 2.704 0 0 0 2.579-1.873l2.129-6.556A3.941 3.941 0 0 1 188.973 0a3.934 3.934 0 0 1 3.744 2.72l2.13 6.556a2.707 2.707 0 0 0 2.579 1.873h6.893a3.94 3.94 0 0 1 3.744 2.72 3.94 3.94 0 0 1-1.43 4.401l-5.577 4.052a2.705 2.705 0 0 0-.985 3.032l2.131 6.555a3.884 3.884 0 0 1-1.431 4.401 3.92 3.92 0 0 1-2.313.766ZM255.02 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.704 2.704 0 0 0-3.188 0l-5.576 4.051a3.937 3.937 0 0 1-6.058-4.4l2.13-6.556a2.705 2.705 0 0 0-.985-3.032l-5.577-4.052a3.933 3.933 0 0 1-1.429-4.4 3.934 3.934 0 0 1 3.743-2.72h6.893a2.707 2.707 0 0 0 2.579-1.874l2.13-6.556a3.935 3.935 0 0 1 7.488 0l2.13 6.556a2.701 2.701 0 0 0 2.579 1.873h6.892a3.935 3.935 0 0 1 3.744 5.153 3.935 3.935 0 0 1-1.43 1.968l-5.576 4.052a2.707 2.707 0 0 0-.985 3.032l2.13 6.555a3.877 3.877 0 0 1-1.43 4.401 3.924 3.924 0 0 1-2.314.766Z\" fill=\"currentColor\"></path></svg>"}
className={`w-html-embed c1g9ho3y cs3dvlt c1wj3u2d cr3oe4d`} />
</Fragment_1>
</Slot>
</Box>
</Box>
</Box>
</Fragment_1>
<Fragment_1>
<Box
className={`w-box c1udybau cdb7l7w cw06hvq cgf5tfr c1e7wbyz chgdru c17dk2go cf8ie7v cpsmix7 c1t2c8d7 c2xr64q c1kdxer3`}>
<Paragraph
className={`w-paragraph`}>
{"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\""}
</Paragraph>
<Separator
className={`w-separator c1x0kqow c12g22pm c1t63v45 c100q1g9`} />
<Box
className={`w-box c1udybau cjdoc0u cgf5tfr c1e7wbyz c1m0iipv c1h2j5hn`}>
<Image
alt={"Emily Doe"}
src={"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg"}
width={100}
height={100}
loading={"lazy"}
className={`w-image chfm7fa c1cw79vu c1y4m3nl cntvrbz cxaipdf c11kwm39 cz288c9 clzlznf`} />
<Box
className={`w-box c1udybau cdb7l7w c1y8hsq3 c16w7v2z`}>
<Text
className={`w-text c9gb9mb`}>
{"Emily Doe, CEO of ACME"}
</Text>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg aria-hidden=\"true\" viewBox=\"0 0 265 38\" height=\"100%\" width=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M28.766 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.702 2.702 0 0 0-3.188 0l-5.576 4.051a3.937 3.937 0 0 1-6.058-4.4l2.13-6.556a2.705 2.705 0 0 0-.985-3.032L1.623 18.27a3.936 3.936 0 0 1 2.313-7.12h6.893a2.705 2.705 0 0 0 2.58-1.874l2.129-6.556a3.936 3.936 0 0 1 7.488 0l2.13 6.556a2.705 2.705 0 0 0 2.579 1.873h6.893a3.937 3.937 0 0 1 2.313 7.121l-5.576 4.052a2.705 2.705 0 0 0-.985 3.032l2.13 6.555a3.877 3.877 0 0 1-1.43 4.401c-.67.495-1.48.763-2.314.766ZM85.328 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.702 2.702 0 0 0-3.187 0l-5.577 4.051a3.937 3.937 0 0 1-6.058-4.4l2.13-6.556a2.705 2.705 0 0 0-.985-3.032l-5.576-4.052a3.936 3.936 0 0 1 2.314-7.12h6.893a2.705 2.705 0 0 0 2.578-1.874L72.1 2.72a3.937 3.937 0 0 1 7.488 0l2.13 6.556a2.706 2.706 0 0 0 2.58 1.873h6.892a3.937 3.937 0 0 1 2.314 7.121l-5.577 4.052a2.706 2.706 0 0 0-.985 3.032l2.13 6.555a3.878 3.878 0 0 1-1.43 4.401c-.67.495-1.48.763-2.314.766ZM141.895 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.708 2.708 0 0 0-3.188 0l-5.576 4.051a3.939 3.939 0 0 1-6.058-1.968 3.935 3.935 0 0 1 0-2.433l2.13-6.555a2.706 2.706 0 0 0-.985-3.032l-5.577-4.052a3.932 3.932 0 0 1-1.429-4.4 3.934 3.934 0 0 1 3.743-2.72h6.893a2.708 2.708 0 0 0 2.579-1.874l2.13-6.556a3.935 3.935 0 0 1 7.488 0l2.13 6.556a2.701 2.701 0 0 0 2.579 1.873h6.892a3.934 3.934 0 0 1 3.744 5.153 3.934 3.934 0 0 1-1.43 1.968l-5.576 4.052a2.707 2.707 0 0 0-.985 3.032l2.13 6.555a3.876 3.876 0 0 1-1.43 4.401 3.927 3.927 0 0 1-2.314.766ZM198.458 37.076a3.923 3.923 0 0 1-2.314-.766l-5.577-4.051a2.698 2.698 0 0 0-3.187 0l-5.577 4.051a3.934 3.934 0 0 1-6.057-1.968 3.942 3.942 0 0 1-.001-2.433l2.131-6.555a2.705 2.705 0 0 0-.986-3.032l-5.576-4.052a3.935 3.935 0 0 1 0-6.369 3.94 3.94 0 0 1 2.314-.752h6.893a2.704 2.704 0 0 0 2.579-1.873l2.129-6.556A3.941 3.941 0 0 1 188.973 0a3.934 3.934 0 0 1 3.744 2.72l2.13 6.556a2.707 2.707 0 0 0 2.579 1.873h6.893a3.94 3.94 0 0 1 3.744 2.72 3.94 3.94 0 0 1-1.43 4.401l-5.577 4.052a2.705 2.705 0 0 0-.985 3.032l2.131 6.555a3.884 3.884 0 0 1-1.431 4.401 3.92 3.92 0 0 1-2.313.766ZM255.02 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.704 2.704 0 0 0-3.188 0l-5.576 4.051a3.937 3.937 0 0 1-6.058-4.4l2.13-6.556a2.705 2.705 0 0 0-.985-3.032l-5.577-4.052a3.933 3.933 0 0 1-1.429-4.4 3.934 3.934 0 0 1 3.743-2.72h6.893a2.707 2.707 0 0 0 2.579-1.874l2.13-6.556a3.935 3.935 0 0 1 7.488 0l2.13 6.556a2.701 2.701 0 0 0 2.579 1.873h6.892a3.935 3.935 0 0 1 3.744 5.153 3.935 3.935 0 0 1-1.43 1.968l-5.576 4.052a2.707 2.707 0 0 0-.985 3.032l2.13 6.555a3.877 3.877 0 0 1-1.43 4.401 3.924 3.924 0 0 1-2.314.766Z\" fill=\"currentColor\"></path></svg>"}
className={`w-html-embed c1g9ho3y cs3dvlt c1wj3u2d cr3oe4d`} />
</Fragment_1>
</Slot>
</Box>
</Box>
</Box>
</Fragment_1>
<Box
className={`w-box c1udybau cdb7l7w cw06hvq cgf5tfr c1e7wbyz chgdru c17dk2go cf8ie7v cpsmix7 c1t2c8d7 c2xr64q c1kdxer3`}>
<Paragraph
className={`w-paragraph`}>
{"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\""}
</Paragraph>
<Separator
className={`w-separator c1x0kqow c12g22pm c1t63v45 c100q1g9`} />
<Box
className={`w-box c1udybau cjdoc0u cgf5tfr c1e7wbyz c1m0iipv c1h2j5hn`}>
<Image
alt={"Emily Doe"}
src={"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg"}
width={100}
height={100}
className={`w-image chfm7fa c1cw79vu c1y4m3nl cntvrbz cxaipdf c11kwm39 cz288c9 clzlznf`} />
<Box
className={`w-box c1udybau cdb7l7w c1y8hsq3 c16w7v2z`}>
<Text
className={`w-text c9gb9mb`}>
{"Emily Doe, CEO of ACME"}
</Text>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg aria-hidden=\"true\" viewBox=\"0 0 265 38\" height=\"100%\" width=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M28.766 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.702 2.702 0 0 0-3.188 0l-5.576 4.051a3.937 3.937 0 0 1-6.058-4.4l2.13-6.556a2.705 2.705 0 0 0-.985-3.032L1.623 18.27a3.936 3.936 0 0 1 2.313-7.12h6.893a2.705 2.705 0 0 0 2.58-1.874l2.129-6.556a3.936 3.936 0 0 1 7.488 0l2.13 6.556a2.705 2.705 0 0 0 2.579 1.873h6.893a3.937 3.937 0 0 1 2.313 7.121l-5.576 4.052a2.705 2.705 0 0 0-.985 3.032l2.13 6.555a3.877 3.877 0 0 1-1.43 4.401c-.67.495-1.48.763-2.314.766ZM85.328 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.702 2.702 0 0 0-3.187 0l-5.577 4.051a3.937 3.937 0 0 1-6.058-4.4l2.13-6.556a2.705 2.705 0 0 0-.985-3.032l-5.576-4.052a3.936 3.936 0 0 1 2.314-7.12h6.893a2.705 2.705 0 0 0 2.578-1.874L72.1 2.72a3.937 3.937 0 0 1 7.488 0l2.13 6.556a2.706 2.706 0 0 0 2.58 1.873h6.892a3.937 3.937 0 0 1 2.314 7.121l-5.577 4.052a2.706 2.706 0 0 0-.985 3.032l2.13 6.555a3.878 3.878 0 0 1-1.43 4.401c-.67.495-1.48.763-2.314.766ZM141.895 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.708 2.708 0 0 0-3.188 0l-5.576 4.051a3.939 3.939 0 0 1-6.058-1.968 3.935 3.935 0 0 1 0-2.433l2.13-6.555a2.706 2.706 0 0 0-.985-3.032l-5.577-4.052a3.932 3.932 0 0 1-1.429-4.4 3.934 3.934 0 0 1 3.743-2.72h6.893a2.708 2.708 0 0 0 2.579-1.874l2.13-6.556a3.935 3.935 0 0 1 7.488 0l2.13 6.556a2.701 2.701 0 0 0 2.579 1.873h6.892a3.934 3.934 0 0 1 3.744 5.153 3.934 3.934 0 0 1-1.43 1.968l-5.576 4.052a2.707 2.707 0 0 0-.985 3.032l2.13 6.555a3.876 3.876 0 0 1-1.43 4.401 3.927 3.927 0 0 1-2.314.766ZM198.458 37.076a3.923 3.923 0 0 1-2.314-.766l-5.577-4.051a2.698 2.698 0 0 0-3.187 0l-5.577 4.051a3.934 3.934 0 0 1-6.057-1.968 3.942 3.942 0 0 1-.001-2.433l2.131-6.555a2.705 2.705 0 0 0-.986-3.032l-5.576-4.052a3.935 3.935 0 0 1 0-6.369 3.94 3.94 0 0 1 2.314-.752h6.893a2.704 2.704 0 0 0 2.579-1.873l2.129-6.556A3.941 3.941 0 0 1 188.973 0a3.934 3.934 0 0 1 3.744 2.72l2.13 6.556a2.707 2.707 0 0 0 2.579 1.873h6.893a3.94 3.94 0 0 1 3.744 2.72 3.94 3.94 0 0 1-1.43 4.401l-5.577 4.052a2.705 2.705 0 0 0-.985 3.032l2.131 6.555a3.884 3.884 0 0 1-1.431 4.401 3.92 3.92 0 0 1-2.313.766ZM255.02 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.704 2.704 0 0 0-3.188 0l-5.576 4.051a3.937 3.937 0 0 1-6.058-4.4l2.13-6.556a2.705 2.705 0 0 0-.985-3.032l-5.577-4.052a3.933 3.933 0 0 1-1.429-4.4 3.934 3.934 0 0 1 3.743-2.72h6.893a2.707 2.707 0 0 0 2.579-1.874l2.13-6.556a3.935 3.935 0 0 1 7.488 0l2.13 6.556a2.701 2.701 0 0 0 2.579 1.873h6.892a3.935 3.935 0 0 1 3.744 5.153 3.935 3.935 0 0 1-1.43 1.968l-5.576 4.052a2.707 2.707 0 0 0-.985 3.032l2.13 6.555a3.877 3.877 0 0 1-1.43 4.401 3.924 3.924 0 0 1-2.314.766Z\" fill=\"currentColor\"></path></svg>"}
className={`w-html-embed c1g9ho3y cs3dvlt c1wj3u2d cr3oe4d`} />
</Fragment_1>
</Slot>
</Box>
</Box>
</Box>
</Box>
<Box
className={`w-box c1fc00l c1n704d cl8tvtt cn9ofg9 c11az9g3 c1ciau3r cv7dw1t c1iutj8u`}>
<Box
className={`w-box c1udybau cdb7l7w cw06hvq cgf5tfr c1e7wbyz chgdru c17dk2go cf8ie7v cpsmix7 c1t2c8d7 c2xr64q c1kdxer3`}>
<Paragraph
className={`w-paragraph`}>
{"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\""}
</Paragraph>
<Separator
className={`w-separator c1x0kqow c12g22pm c1t63v45 c100q1g9`} />
<Box
className={`w-box c1udybau cjdoc0u cgf5tfr c1e7wbyz c1m0iipv c1h2j5hn`}>
<Image
alt={"Emily Doe"}
src={"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg"}
width={100}
height={100}
className={`w-image chfm7fa c1cw79vu c1y4m3nl cntvrbz cxaipdf c11kwm39 cz288c9 clzlznf`} />
<Box
className={`w-box c1udybau cdb7l7w c1y8hsq3 c16w7v2z`}>
<Text
className={`w-text c9gb9mb`}>
{"Emily Doe, CEO of ACME"}
</Text>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg aria-hidden=\"true\" viewBox=\"0 0 265 38\" height=\"100%\" width=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M28.766 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.702 2.702 0 0 0-3.188 0l-5.576 4.051a3.937 3.937 0 0 1-6.058-4.4l2.13-6.556a2.705 2.705 0 0 0-.985-3.032L1.623 18.27a3.936 3.936 0 0 1 2.313-7.12h6.893a2.705 2.705 0 0 0 2.58-1.874l2.129-6.556a3.936 3.936 0 0 1 7.488 0l2.13 6.556a2.705 2.705 0 0 0 2.579 1.873h6.893a3.937 3.937 0 0 1 2.313 7.121l-5.576 4.052a2.705 2.705 0 0 0-.985 3.032l2.13 6.555a3.877 3.877 0 0 1-1.43 4.401c-.67.495-1.48.763-2.314.766ZM85.328 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.702 2.702 0 0 0-3.187 0l-5.577 4.051a3.937 3.937 0 0 1-6.058-4.4l2.13-6.556a2.705 2.705 0 0 0-.985-3.032l-5.576-4.052a3.936 3.936 0 0 1 2.314-7.12h6.893a2.705 2.705 0 0 0 2.578-1.874L72.1 2.72a3.937 3.937 0 0 1 7.488 0l2.13 6.556a2.706 2.706 0 0 0 2.58 1.873h6.892a3.937 3.937 0 0 1 2.314 7.121l-5.577 4.052a2.706 2.706 0 0 0-.985 3.032l2.13 6.555a3.878 3.878 0 0 1-1.43 4.401c-.67.495-1.48.763-2.314.766ZM141.895 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.708 2.708 0 0 0-3.188 0l-5.576 4.051a3.939 3.939 0 0 1-6.058-1.968 3.935 3.935 0 0 1 0-2.433l2.13-6.555a2.706 2.706 0 0 0-.985-3.032l-5.577-4.052a3.932 3.932 0 0 1-1.429-4.4 3.934 3.934 0 0 1 3.743-2.72h6.893a2.708 2.708 0 0 0 2.579-1.874l2.13-6.556a3.935 3.935 0 0 1 7.488 0l2.13 6.556a2.701 2.701 0 0 0 2.579 1.873h6.892a3.934 3.934 0 0 1 3.744 5.153 3.934 3.934 0 0 1-1.43 1.968l-5.576 4.052a2.707 2.707 0 0 0-.985 3.032l2.13 6.555a3.876 3.876 0 0 1-1.43 4.401 3.927 3.927 0 0 1-2.314.766ZM198.458 37.076a3.923 3.923 0 0 1-2.314-.766l-5.577-4.051a2.698 2.698 0 0 0-3.187 0l-5.577 4.051a3.934 3.934 0 0 1-6.057-1.968 3.942 3.942 0 0 1-.001-2.433l2.131-6.555a2.705 2.705 0 0 0-.986-3.032l-5.576-4.052a3.935 3.935 0 0 1 0-6.369 3.94 3.94 0 0 1 2.314-.752h6.893a2.704 2.704 0 0 0 2.579-1.873l2.129-6.556A3.941 3.941 0 0 1 188.973 0a3.934 3.934 0 0 1 3.744 2.72l2.13 6.556a2.707 2.707 0 0 0 2.579 1.873h6.893a3.94 3.94 0 0 1 3.744 2.72 3.94 3.94 0 0 1-1.43 4.401l-5.577 4.052a2.705 2.705 0 0 0-.985 3.032l2.131 6.555a3.884 3.884 0 0 1-1.431 4.401 3.92 3.92 0 0 1-2.313.766ZM255.02 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.704 2.704 0 0 0-3.188 0l-5.576 4.051a3.937 3.937 0 0 1-6.058-4.4l2.13-6.556a2.705 2.705 0 0 0-.985-3.032l-5.577-4.052a3.933 3.933 0 0 1-1.429-4.4 3.934 3.934 0 0 1 3.743-2.72h6.893a2.707 2.707 0 0 0 2.579-1.874l2.13-6.556a3.935 3.935 0 0 1 7.488 0l2.13 6.556a2.701 2.701 0 0 0 2.579 1.873h6.892a3.935 3.935 0 0 1 3.744 5.153 3.935 3.935 0 0 1-1.43 1.968l-5.576 4.052a2.707 2.707 0 0 0-.985 3.032l2.13 6.555a3.877 3.877 0 0 1-1.43 4.401 3.924 3.924 0 0 1-2.314.766Z\" fill=\"currentColor\"></path></svg>"}
className={`w-html-embed c1g9ho3y cs3dvlt c1wj3u2d cr3oe4d`} />
</Fragment_1>
</Slot>
</Box>
</Box>
</Box>
<Box
className={`w-box c1udybau cdb7l7w cw06hvq cgf5tfr c1e7wbyz chgdru c17dk2go cf8ie7v cpsmix7 c1t2c8d7 c2xr64q c1kdxer3`}>
<Paragraph
className={`w-paragraph`}>
{"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\""}
</Paragraph>
<Separator
className={`w-separator c1x0kqow c12g22pm c1t63v45 c100q1g9`} />
<Box
className={`w-box c1udybau cjdoc0u cgf5tfr c1e7wbyz c1m0iipv c1h2j5hn`}>
<Image
alt={"Emily Doe"}
src={"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg"}
width={100}
height={100}
className={`w-image chfm7fa c1cw79vu c1y4m3nl cntvrbz cxaipdf c11kwm39 cz288c9 clzlznf`} />
<Box
className={`w-box c1udybau cdb7l7w c1y8hsq3 c16w7v2z`}>
<Text
className={`w-text c9gb9mb`}>
{"Emily Doe, CEO of ACME"}
</Text>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg aria-hidden=\"true\" viewBox=\"0 0 265 38\" height=\"100%\" width=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M28.766 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.702 2.702 0 0 0-3.188 0l-5.576 4.051a3.937 3.937 0 0 1-6.058-4.4l2.13-6.556a2.705 2.705 0 0 0-.985-3.032L1.623 18.27a3.936 3.936 0 0 1 2.313-7.12h6.893a2.705 2.705 0 0 0 2.58-1.874l2.129-6.556a3.936 3.936 0 0 1 7.488 0l2.13 6.556a2.705 2.705 0 0 0 2.579 1.873h6.893a3.937 3.937 0 0 1 2.313 7.121l-5.576 4.052a2.705 2.705 0 0 0-.985 3.032l2.13 6.555a3.877 3.877 0 0 1-1.43 4.401c-.67.495-1.48.763-2.314.766ZM85.328 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.702 2.702 0 0 0-3.187 0l-5.577 4.051a3.937 3.937 0 0 1-6.058-4.4l2.13-6.556a2.705 2.705 0 0 0-.985-3.032l-5.576-4.052a3.936 3.936 0 0 1 2.314-7.12h6.893a2.705 2.705 0 0 0 2.578-1.874L72.1 2.72a3.937 3.937 0 0 1 7.488 0l2.13 6.556a2.706 2.706 0 0 0 2.58 1.873h6.892a3.937 3.937 0 0 1 2.314 7.121l-5.577 4.052a2.706 2.706 0 0 0-.985 3.032l2.13 6.555a3.878 3.878 0 0 1-1.43 4.401c-.67.495-1.48.763-2.314.766ZM141.895 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.708 2.708 0 0 0-3.188 0l-5.576 4.051a3.939 3.939 0 0 1-6.058-1.968 3.935 3.935 0 0 1 0-2.433l2.13-6.555a2.706 2.706 0 0 0-.985-3.032l-5.577-4.052a3.932 3.932 0 0 1-1.429-4.4 3.934 3.934 0 0 1 3.743-2.72h6.893a2.708 2.708 0 0 0 2.579-1.874l2.13-6.556a3.935 3.935 0 0 1 7.488 0l2.13 6.556a2.701 2.701 0 0 0 2.579 1.873h6.892a3.934 3.934 0 0 1 3.744 5.153 3.934 3.934 0 0 1-1.43 1.968l-5.576 4.052a2.707 2.707 0 0 0-.985 3.032l2.13 6.555a3.876 3.876 0 0 1-1.43 4.401 3.927 3.927 0 0 1-2.314.766ZM198.458 37.076a3.923 3.923 0 0 1-2.314-.766l-5.577-4.051a2.698 2.698 0 0 0-3.187 0l-5.577 4.051a3.934 3.934 0 0 1-6.057-1.968 3.942 3.942 0 0 1-.001-2.433l2.131-6.555a2.705 2.705 0 0 0-.986-3.032l-5.576-4.052a3.935 3.935 0 0 1 0-6.369 3.94 3.94 0 0 1 2.314-.752h6.893a2.704 2.704 0 0 0 2.579-1.873l2.129-6.556A3.941 3.941 0 0 1 188.973 0a3.934 3.934 0 0 1 3.744 2.72l2.13 6.556a2.707 2.707 0 0 0 2.579 1.873h6.893a3.94 3.94 0 0 1 3.744 2.72 3.94 3.94 0 0 1-1.43 4.401l-5.577 4.052a2.705 2.705 0 0 0-.985 3.032l2.131 6.555a3.884 3.884 0 0 1-1.431 4.401 3.92 3.92 0 0 1-2.313.766ZM255.02 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.704 2.704 0 0 0-3.188 0l-5.576 4.051a3.937 3.937 0 0 1-6.058-4.4l2.13-6.556a2.705 2.705 0 0 0-.985-3.032l-5.577-4.052a3.933 3.933 0 0 1-1.429-4.4 3.934 3.934 0 0 1 3.743-2.72h6.893a2.707 2.707 0 0 0 2.579-1.874l2.13-6.556a3.935 3.935 0 0 1 7.488 0l2.13 6.556a2.701 2.701 0 0 0 2.579 1.873h6.892a3.935 3.935 0 0 1 3.744 5.153 3.935 3.935 0 0 1-1.43 1.968l-5.576 4.052a2.707 2.707 0 0 0-.985 3.032l2.13 6.555a3.877 3.877 0 0 1-1.43 4.401 3.924 3.924 0 0 1-2.314.766Z\" fill=\"currentColor\"></path></svg>"}
className={`w-html-embed c1g9ho3y cs3dvlt c1wj3u2d cr3oe4d`} />
</Fragment_1>
</Slot>
</Box>
</Box>
</Box>
<Box
className={`w-box c1udybau cdb7l7w cw06hvq cgf5tfr c1e7wbyz chgdru c17dk2go cf8ie7v cpsmix7 c1t2c8d7 c2xr64q c1kdxer3`}>
<Paragraph
className={`w-paragraph`}>
{"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\""}
</Paragraph>
<Separator
className={`w-separator c1x0kqow c12g22pm c1t63v45 c100q1g9`} />
<Box
className={`w-box c1udybau cjdoc0u cgf5tfr c1e7wbyz c1m0iipv c1h2j5hn`}>
<Image
alt={"Emily Doe"}
src={"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg"}
width={100}
height={100}
className={`w-image chfm7fa c1cw79vu c1y4m3nl cntvrbz cxaipdf c11kwm39 cz288c9 clzlznf`} />
<Box
className={`w-box c1udybau cdb7l7w c1y8hsq3 c16w7v2z`}>
<Text
className={`w-text c9gb9mb`}>
{"Emily Doe, CEO of ACME"}
</Text>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg aria-hidden=\"true\" viewBox=\"0 0 265 38\" height=\"100%\" width=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M28.766 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.702 2.702 0 0 0-3.188 0l-5.576 4.051a3.937 3.937 0 0 1-6.058-4.4l2.13-6.556a2.705 2.705 0 0 0-.985-3.032L1.623 18.27a3.936 3.936 0 0 1 2.313-7.12h6.893a2.705 2.705 0 0 0 2.58-1.874l2.129-6.556a3.936 3.936 0 0 1 7.488 0l2.13 6.556a2.705 2.705 0 0 0 2.579 1.873h6.893a3.937 3.937 0 0 1 2.313 7.121l-5.576 4.052a2.705 2.705 0 0 0-.985 3.032l2.13 6.555a3.877 3.877 0 0 1-1.43 4.401c-.67.495-1.48.763-2.314.766ZM85.328 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.702 2.702 0 0 0-3.187 0l-5.577 4.051a3.937 3.937 0 0 1-6.058-4.4l2.13-6.556a2.705 2.705 0 0 0-.985-3.032l-5.576-4.052a3.936 3.936 0 0 1 2.314-7.12h6.893a2.705 2.705 0 0 0 2.578-1.874L72.1 2.72a3.937 3.937 0 0 1 7.488 0l2.13 6.556a2.706 2.706 0 0 0 2.58 1.873h6.892a3.937 3.937 0 0 1 2.314 7.121l-5.577 4.052a2.706 2.706 0 0 0-.985 3.032l2.13 6.555a3.878 3.878 0 0 1-1.43 4.401c-.67.495-1.48.763-2.314.766ZM141.895 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.708 2.708 0 0 0-3.188 0l-5.576 4.051a3.939 3.939 0 0 1-6.058-1.968 3.935 3.935 0 0 1 0-2.433l2.13-6.555a2.706 2.706 0 0 0-.985-3.032l-5.577-4.052a3.932 3.932 0 0 1-1.429-4.4 3.934 3.934 0 0 1 3.743-2.72h6.893a2.708 2.708 0 0 0 2.579-1.874l2.13-6.556a3.935 3.935 0 0 1 7.488 0l2.13 6.556a2.701 2.701 0 0 0 2.579 1.873h6.892a3.934 3.934 0 0 1 3.744 5.153 3.934 3.934 0 0 1-1.43 1.968l-5.576 4.052a2.707 2.707 0 0 0-.985 3.032l2.13 6.555a3.876 3.876 0 0 1-1.43 4.401 3.927 3.927 0 0 1-2.314.766ZM198.458 37.076a3.923 3.923 0 0 1-2.314-.766l-5.577-4.051a2.698 2.698 0 0 0-3.187 0l-5.577 4.051a3.934 3.934 0 0 1-6.057-1.968 3.942 3.942 0 0 1-.001-2.433l2.131-6.555a2.705 2.705 0 0 0-.986-3.032l-5.576-4.052a3.935 3.935 0 0 1 0-6.369 3.94 3.94 0 0 1 2.314-.752h6.893a2.704 2.704 0 0 0 2.579-1.873l2.129-6.556A3.941 3.941 0 0 1 188.973 0a3.934 3.934 0 0 1 3.744 2.72l2.13 6.556a2.707 2.707 0 0 0 2.579 1.873h6.893a3.94 3.94 0 0 1 3.744 2.72 3.94 3.94 0 0 1-1.43 4.401l-5.577 4.052a2.705 2.705 0 0 0-.985 3.032l2.131 6.555a3.884 3.884 0 0 1-1.431 4.401 3.92 3.92 0 0 1-2.313.766ZM255.02 37.076a3.925 3.925 0 0 1-2.314-.766l-5.576-4.051a2.704 2.704 0 0 0-3.188 0l-5.576 4.051a3.937 3.937 0 0 1-6.058-4.4l2.13-6.556a2.705 2.705 0 0 0-.985-3.032l-5.577-4.052a3.933 3.933 0 0 1-1.429-4.4 3.934 3.934 0 0 1 3.743-2.72h6.893a2.707 2.707 0 0 0 2.579-1.874l2.13-6.556a3.935 3.935 0 0 1 7.488 0l2.13 6.556a2.701 2.701 0 0 0 2.579 1.873h6.892a3.935 3.935 0 0 1 3.744 5.153 3.935 3.935 0 0 1-1.43 1.968l-5.576 4.052a2.707 2.707 0 0 0-.985 3.032l2.13 6.555a3.877 3.877 0 0 1-1.43 4.401 3.924 3.924 0 0 1-2.314.766Z\" fill=\"currentColor\"></path></svg>"}
className={`w-html-embed c1g9ho3y cs3dvlt c1wj3u2d cr3oe4d`} />
</Fragment_1>
</Slot>
</Box>
</Box>
</Box>
</Box>
<Box
className={`w-box c1ohl2ak c12g22pm civdyaj c5zlccm c1cojzr7 cpu1rnj`} />
</Box>
</Box>
</Body>
}


      export { Page }
    