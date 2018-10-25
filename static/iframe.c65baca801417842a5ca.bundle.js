(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{210:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(17),r=n(16),o=n(20),i=n(18),l=n(19),c=n(0),s=n.n(c),u=n(136),d=n.n(u),m=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.rowData,n=e.index,a=e.rowClassName,r=e.style,o=e.getCellValue,i=e.getColumnWidth,l=e.children,c=e.onClick,u=e.onDoubleClick,m=e.onMouseOver,p=e.onMouseOut,h=e.onMouseDown,f=e.onMouseUp,b=e.onRightClick,C=0==n%2?"VTRowOdd":"VTRowEven",y=a&&a(n),g=0;return s.a.createElement("div",{className:d()("VTRow",C,y),style:r,onClick:c,onDoubleClick:u,onMouseOver:m,onMouseOut:p,onContextMenu:b,onMouseDown:h,onMouseUp:f,"data-row-index":n},s.a.Children.map(l,function(e){if(!e)return null;var n,a=e.props,r=a.cellRenderer,l=a.dataKey,c=i(g);if(r)n=r({dataKey:l,rowData:t,columnIndex:g});else{var u=o({rowData:t,dataKey:l});n=s.a.createElement("div",{className:"VTCellContent",title:u},u)}return g+=1,s.a.createElement("div",{className:"VTCell",style:{minWidth:c,maxWidth:c}},n)}))}}]),t}(s.a.Component);m.__docgenInfo={description:"",methods:[],displayName:"Row",props:{index:{type:{name:"number"},required:!1,description:"Row index number"},style:{type:{name:"object"},required:!1,description:"Row style object"},children:{type:{name:"array"},required:!1,description:"Table columns array"},rowClassName:{type:{name:"func"},required:!1,description:"Row className determine function"},getCellValue:{type:{name:"func"},required:!1,description:"Function to get cell value"},getColumnWidth:{type:{name:"func"},required:!1,description:"Function to get column width"},onClick:{type:{name:"func"},required:!1,description:"Mouse actions"},onDoubleClick:{type:{name:"func"},required:!1,description:""},onMouseOver:{type:{name:"func"},required:!1,description:""},onMouseOut:{type:{name:"func"},required:!1,description:""},onMouseDown:{type:{name:"func"},required:!1,description:""},onMouseUp:{type:{name:"func"},required:!1,description:""},onRightClick:{type:{name:"func"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\lib\\Row\\Row.js"]={name:"Row",docgenInfo:m.__docgenInfo,path:"src\\lib\\Row\\Row.js"})},211:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(17),r=n(16),o=n(20),i=n(18),l=n(19),c=n(0),s=n.n(c),u=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("span",null)}}]),t}(s.a.Component);u.__docgenInfo={description:"",methods:[],displayName:"Column",props:{cellRenderer:{type:{name:"func"},required:!1,description:"Content cell render function"},columnHeaderCellRenderer:{type:{name:"func"},required:!1,description:"Column header cell render function"},dataKey:{type:{name:"string"},required:!1,description:"Field key containing data"},width:{type:{name:"number"},required:!1,description:"Default column width in pixels"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\lib\\Column\\Column.js"]={name:"Column",docgenInfo:u.__docgenInfo,path:"src\\lib\\Column\\Column.js"})},44:function(e,t,n){"use strict";var a=n(112),r=function(){for(var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:5,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t};function o(){for(var e="#",t=0;6>t;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}for(var i=new a.b,l=0;1e3>l;l+=1)i=i.push(new a.c({c1:"".concat(Math.floor(l/10),"_word_c1"),c2:"".concat(Math.floor(l/10),"_word_c2"),c3:"".concat(Math.floor(l/10),"_").concat(r(),"_word_c3"),c4:"".concat(Math.floor(l/10),"_").concat(r(),"_word_c4"),color:o()}));t.a=i},46:function(e,t,n){"use strict";var a=n(209),r=n(187),o=n(110),i=n(17),l=n(20),c=n(18),s=n(16),u=n(19),d=n(3),m=n(5),p=n(0),h=n.n(p),f=n(530),b=n(112),C=n(136),y=n.n(C),g=n(525),w=n.n(g),O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r))),Object(m.a)(Object(d.a)(Object(d.a)(n)),"handleDrag",function(e,t){(0,n.props.onResizeColumn)(t.x)}),Object(m.a)(Object(d.a)(Object(d.a)(n)),"handleClick",function(e){e.stopPropagation()}),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return h.a.createElement(w.a,{axis:"x",defaultClassName:"VTColumnResizer",defaultClassNameDragging:"VTColumnResizerActive",onStop:this.handleDrag,position:{x:0,y:0},zIndex:999},h.a.createElement("div",{className:"VTColumnResizer",onClick:this.handleClick}))}}]),t}(h.a.Component);O.__docgenInfo={description:"",methods:[{name:"handleDrag",docblock:null,modifiers:[],params:[{name:"event",type:null},{name:"data",type:null}],returns:null},{name:"handleClick",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null}],displayName:"ColumnResizer",props:{onResizeColumn:{type:{name:"func"},required:!0,description:"Action on resize column"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\lib\\ColumnResizer\\ColumnResizer.js"]={name:"ColumnResizer",docgenInfo:O.__docgenInfo,path:"src\\lib\\ColumnResizer\\ColumnResizer.js"});var v=O,j=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.getHeaderHeight,r=t.getColumnWidth,o=t.onResizeColumn,i=t.sortIndicatorRenderer,l=0;return h.a.createElement("div",{className:"VTHeader",style:{height:a()},ref:function(t){return e.headerEl=t}},h.a.Children.map(n,function(t){var n=l;if(!t)return null;var a,c=t.props,s=c.label,u=c.dataKey,d=c.columnHeaderCellRenderer,m=r(n);a=d?d({label:s,dataKey:u,columnIndex:n}):h.a.createElement("div",{className:"VTCellContent",title:s},s);var p=function(t){var a=e.props[t];if(a)return function(e){return a(e,{dataKey:u,columnIndex:n})}};return l+=1,h.a.createElement("div",{className:"VTHeaderCell",style:{minWidth:m,maxWidth:m},onClick:p("onClick"),onDoubleClick:p("onDoubleClick"),onMouseOver:p("onMouseOver"),onMouseOut:p("onMouseOut"),onContextMenu:p("onRightClick")},a,h.a.createElement(v,{onResizeColumn:function(e){return o(n,e,u)}}),i({dataKey:t.props.dataKey,columnIndex:n}))}),h.a.createElement("div",{className:"VTHeaderCell",style:{minWidth:17,maxWidth:17}}))}}]),t}(h.a.Component);Object(m.a)(j,"defaultProps",{onResizeColumn:function(e){return e},sortIndicatorRenderer:function(){return null}}),j.__docgenInfo={description:"",methods:[],displayName:"Header",props:{onResizeColumn:{defaultValue:{value:"f => f",computed:!1},type:{name:"func"},required:!1,description:""},sortIndicatorRenderer:{defaultValue:{value:"() => null",computed:!1},type:{name:"func"},required:!1,description:""},children:{type:{name:"array"},required:!1,description:""},getHeaderHeight:{type:{name:"func"},required:!0,description:""},getColumnWidth:{type:{name:"func"},required:!0,description:""},height:{type:{name:"number"},required:!0,description:""},onClick:{type:{name:"func"},required:!1,description:""},onDoubleClick:{type:{name:"func"},required:!1,description:""},onMouseOver:{type:{name:"func"},required:!1,description:""},onMouseOut:{type:{name:"func"},required:!1,description:""},onRightClick:{type:{name:"func"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\lib\\Header\\Header.js"]={name:"Header",docgenInfo:j.__docgenInfo,path:"src\\lib\\Header\\Header.js"});var R=n(210),k=n(211),E=function(e){var t=0;return h.a.Children.forEach(e,function(e){e&&(t+=1)}),t},S=function(e){function t(e){var n;return Object(i.a)(this,t),n=Object(l.a)(this,Object(c.a)(t).call(this,e)),Object(m.a)(Object(d.a)(Object(d.a)(n)),"state",{customColumnsWidth:[]}),Object(m.a)(Object(d.a)(Object(d.a)(n)),"rowWidth",null),Object(m.a)(Object(d.a)(Object(d.a)(n)),"getColumnWidth",function(e){var t=n.props,a=t.width,r=t.overflowWidth,o=t.minColumnWidth,i=t.dynamicColumnWidth,l=n.state.customColumnsWidth;if(!i)return l[e];if(l[e])return l[e];var c=0,s=0;return l.forEach(function(e){e&&(s+=1,c+=e)}),Math.max((a-r-c)/(n.getColumnsCount()-s),o)}),Object(m.a)(Object(d.a)(Object(d.a)(n)),"getRowHeight",function(e){var t=n.props.rowHeight;return"function"==typeof t?t(e):t}),Object(m.a)(Object(d.a)(Object(d.a)(n)),"getEstimatedItemSize",function(){var e=n.props.data.reduce(function(e,t,a){return e+n.getRowHeight(a)},0);return Math.floor(e/n.getDataSize())}),Object(m.a)(Object(d.a)(Object(d.a)(n)),"getHeaderHeight",function(){var e=n.props,t=e.headerHeight;return e.disableHeader?0:"function"==typeof t?t():t}),Object(m.a)(Object(d.a)(Object(d.a)(n)),"getRowData",function(e){var t=n.props.data;return b.a.isIterable(t)?t.get(e):t[e]}),Object(m.a)(Object(d.a)(Object(d.a)(n)),"getCellValue",function(e){var t=e.rowData,n=e.dataKey;return b.a.isIterable(t)?t.get(n):t[n]}),Object(m.a)(Object(d.a)(Object(d.a)(n)),"getDataSize",function(){var e=n.props.data;return b.a.isIterable(e)?e.size:e.length}),Object(m.a)(Object(d.a)(Object(d.a)(n)),"getRowWidth",function(){var e=n.state.customColumnsWidth;return null===n.rowWidth&&(n.rowWidth=e.reduce(function(e,t,a){return e+n.getColumnWidth(a)},0)),n.rowWidth}),Object(m.a)(Object(d.a)(Object(d.a)(n)),"handleResizeColumn",function(e,t,a){var r=n.props,i=r.minColumnWidth,l=r.maxColumnWidth,c=r.onResizeColumn,s=n.state.customColumnsWidth,u=n.getColumnWidth(e),d=Object(o.a)(s),m=Math.max(u+t,i);l&&(m=Math.min(d[e],l)),d[e]=m,n.setState({customColumnsWidth:d}),n.rowWidth=null,n.list&&n.list.resetAfterIndex(0),c({dataKey:a,columnIndex:e,resizeDiff:t,newWidth:m})}),Object(m.a)(Object(d.a)(Object(d.a)(n)),"getRowHandler",function(e){return n["handleRow".concat(e)]||(n["handleRow".concat(e)]=function(t){var a=n.props["onRow".concat(e)];if(a){var r=+t.currentTarget.dataset.rowIndex;a(t,{rowIndex:r,rowData:n.getRowData(r)})}}),n["handleRow".concat(e)]}),n.state.customColumnsWidth=n.calculateCustomColumnsWidth(),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"calculateCustomColumnsWidth",value:function(){var e=this.props,t=e.children,n=e.overflowWidth,a=e.width,r=e.minColumnWidth,o=e.dynamicColumnWidth,i=[],l=0,c=0;if(h.a.Children.forEach(t,function(e){if(e){var t=e.props.width;Number.isInteger(t)&&(t=Math.max(t,r),l+=1,c+=t),i.push(t||void 0)}}),!o){var s=Math.max((a-n-c)/(this.getColumnsCount()-l),r);i=i.map(function(e){return void 0===e?s:e})}return i}},{key:"componentDidUpdate",value:function(e){E(e.children)!==E(this.props.children)&&(this.setState({customColumnsWidth:this.calculateCustomColumnsWidth()}),this.rowWidth=null)}}]),Object(s.a)(t,[{key:"getColumnsCount",value:function(){var e=this.props.children,t=0;return h.a.Children.forEach(e,function(e){e&&e.type===k.a&&(t+=1)}),t}},{key:"componentDidMount",value:function(){var e=this;!this.props.disableHeader&&this.listOuter&&this.listOuter.addEventListener("scroll",function(t){e.header.headerEl.scrollLeft=t.target.scrollLeft})}},{key:"scrollTo",value:function(){var e;this.list&&(e=this.list).scrollTo.apply(e,arguments)}},{key:"scrollToItem",value:function(){var e;this.list&&(e=this.list).scrollToItem.apply(e,arguments)}},{key:"renderHeader",value:function(){var e=this,t=this.props,n=t.children,a=t.disableHeader,r=t.headerHeight,o=t.sortIndicatorRenderer;if(a)return null;var i={children:n,height:r,getColumnWidth:this.getColumnWidth,getHeaderHeight:this.getHeaderHeight,onResizeColumn:this.handleResizeColumn,onClick:this.props.onHeaderClick,onDoubleClick:this.props.onHeaderDoubleClick,onMouseOver:this.props.onHeaderMouseOver,onMouseOut:this.props.onHeaderMouseOut,onRightClick:this.props.onHeaderRightClick,sortIndicatorRenderer:o,ref:function(t){return e.header=t}};return h.a.createElement(j,i)}},{key:"renderRow",value:function(){var e=this,t=this.props,n=t.rowClassName,a=t.children,o=t.rowRenderer,i={children:a,rowClassName:n,getRowWidth:this.getRowWidth,getCellValue:this.getCellValue,getColumnWidth:this.getColumnWidth,onClick:this.getRowHandler("Click"),onDoubleClick:this.getRowHandler("DoubleClick"),onMouseOver:this.getRowHandler("MouseOver"),onMouseOut:this.getRowHandler("MouseOut"),onMouseDown:this.getRowHandler("MouseDown"),onMouseUp:this.getRowHandler("MouseUp"),onRightClick:this.getRowHandler("RightClick")},l=o||R.a;return function(t){var n=Object(r.a)({},t.style,{width:e.getRowWidth()}),a=e.getRowData(t.index);return h.a.createElement(l,Object(r.a)({},t,{style:n,rowData:a},i))}}},{key:"renderNoItemsLabel",value:function(){var e=this.props.noItemsLabel;return h.a.createElement("div",{className:"VTNoItemsLabel"},e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.height,r=t.width,o=t.listProps,i=t.className,l=t.onScroll;return h.a.createElement("div",{className:y()("VTContainer",i),style:{paddingTop:this.getHeaderHeight(),width:r,height:n-this.getHeaderHeight()}},this.renderHeader(),this.getDataSize()?h.a.createElement(f.a,Object(a.a)({ref:function(t){return e.list=t},innerRef:function(t){return e.listInner=t},outerRef:function(t){return e.listOuter=t},className:"VTList",height:n-this.getHeaderHeight(),itemCount:this.getDataSize(),itemSize:this.getRowHeight,width:r,onScroll:l,estimatedItemSize:this.getEstimatedItemSize()},o),this.renderRow()):this.renderNoItemsLabel())}}]),t}(h.a.Component);Object(m.a)(S,"defaultProps",{headerHeight:30,rowHeight:30,onHeaderClick:function(e){return e},onResizeColumn:function(e){return e},onRowClick:function(e){return e},overflowWidth:17,minColumnWidth:30,dynamicColumnWidth:!1,noItemsLabel:"No items"}),S.__docgenInfo={description:"",methods:[{name:"calculateCustomColumnsWidth",docblock:null,modifiers:[],params:[],returns:null},{name:"getColumnsCount",docblock:null,modifiers:[],params:[],returns:null},{name:"getColumnWidth",docblock:null,modifiers:[],params:[{name:"columnIndex",type:null}],returns:null},{name:"getRowHeight",docblock:null,modifiers:[],params:[{name:"index",type:null}],returns:null},{name:"getEstimatedItemSize",docblock:null,modifiers:[],params:[],returns:null},{name:"getHeaderHeight",docblock:null,modifiers:[],params:[],returns:null},{name:"getRowData",docblock:null,modifiers:[],params:[{name:"index",type:null}],returns:null},{name:"getCellValue",docblock:null,modifiers:[],params:[{name:"{ rowData, dataKey }",type:null}],returns:null},{name:"getDataSize",docblock:null,modifiers:[],params:[],returns:null},{name:"getRowWidth",docblock:null,modifiers:[],params:[],returns:null},{name:"handleResizeColumn",docblock:null,modifiers:[],params:[{name:"columnIndex",type:null},{name:"diff",type:null},{name:"dataKey",type:null}],returns:null},{name:"scrollTo",docblock:null,modifiers:[],params:[{name:"...args",type:null}],returns:null},{name:"scrollToItem",docblock:null,modifiers:[],params:[{name:"...args",type:null}],returns:null},{name:"renderHeader",docblock:null,modifiers:[],params:[],returns:null},{name:"getRowHandler",docblock:null,modifiers:[],params:[{name:"actionType",type:null}],returns:null},{name:"renderRow",docblock:null,modifiers:[],params:[],returns:null},{name:"renderNoItemsLabel",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Table",props:{headerHeight:{defaultValue:{value:"30",computed:!1},type:{name:"union",value:[{name:"number"},{name:"func"}]},required:!1,description:"Table header height"},rowHeight:{defaultValue:{value:"30",computed:!1},type:{name:"union",value:[{name:"number"},{name:"func"}]},required:!1,description:"Table row height (may be function)\r\n\n@param {Number} index Порядковый номер элемента в списке данных"},onHeaderClick:{defaultValue:{value:"f => f",computed:!1},type:{name:"func"},required:!1,description:"Mouse action on header row\r\n\n@param {SyntheticEvent} event\r\n@param {object} headerCellParams Параметры ячейки заголовка"},onResizeColumn:{defaultValue:{value:"f => f",computed:!1},type:{name:"func"},required:!1,description:"Action on change column width\r\n\n@param {object} params"},onRowClick:{defaultValue:{value:"f => f",computed:!1},type:{name:"func"},required:!1,description:"Mouse action on table row\r\n\n@param {SyntheticEvent} event\r\n@param {object} rowCellParams Параметры ячейки строки таблицы"},overflowWidth:{defaultValue:{value:"17",computed:!1},type:{name:"number"},required:!1,description:"Width of vertical table overflow"},minColumnWidth:{defaultValue:{value:"30",computed:!1},type:{name:"number"},required:!1,description:"Minimal column width"},dynamicColumnWidth:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Dynamic width for columns that was not resized"},noItemsLabel:{defaultValue:{value:"'No items'",computed:!1},type:{name:"node"},required:!1,description:"No items in data list label"},width:{type:{name:"number"},required:!0,description:"Table width"},height:{type:{name:"number"},required:!0,description:"Table height"},data:{type:{name:"any"},required:!0,description:"Data list"},rowClassName:{type:{name:"func"},required:!1,description:"Row className determine function"},rowRenderer:{type:{name:"func"},required:!1,description:"Personal row renderer function (If nothing return, then internal row function will be applied)\r\n\n@param {object} props"},sortIndicatorRenderer:{type:{name:"func"},required:!1,description:"Sort indicator render function\r\n\n@param {object} props"},onHeaderDoubleClick:{type:{name:"func"},required:!1,description:""},onHeaderMouseOver:{type:{name:"func"},required:!1,description:""},onHeaderMouseOut:{type:{name:"func"},required:!1,description:""},onHeaderRightClick:{type:{name:"func"},required:!1,description:""},onRowDoubleClick:{type:{name:"func"},required:!1,description:""},onRowMouseOver:{type:{name:"func"},required:!1,description:""},onRowMouseOut:{type:{name:"func"},required:!1,description:""},onRowRightClick:{type:{name:"func"},required:!1,description:""},onScroll:{type:{name:"func"},required:!1,description:"Action on table scroll\r\n\n@param {object} params\r\n     @see See [React-Windows docs](https://react-window.now.sh/#/api/FixedSizeList)"},maxColumnWidth:{type:{name:"number"},required:!1,description:"Maximum column width"},listProps:{type:{name:"object"},required:!1,description:"Props for inner `react-window` list component\r\n@see See [React-Windows docs](https://react-window.now.sh/#/api/FixedSizeList)"},disableHeader:{type:{name:"bool"},required:!1,description:"Hide table header row"},className:{type:{name:"string"},required:!1,description:"Optional custom CSS class name to attach to root container element"},id:{type:{name:"string"},required:!1,description:"Optional custom id to attach to root container element"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\lib\\Table\\Table.js"]={name:"Table",docgenInfo:S.__docgenInfo,path:"src\\lib\\Table\\Table.js"});t.a=S},524:function(e,t,n){"use strict";var a=n(46),r=n(44),o=n(55),i=n(7),l=n(0),c=n.n(l);t.a=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(a.a,{className:"MyTable",width:800,height:600,data:r.a,rowHeight:function(){return Math.floor(20+60*Math.random())},onRowClick:Object(o.action)("row clicked"),disableHeader:!1},c.a.createElement(i.a,{label:"c1",dataKey:"c1",width:500}),c.a.createElement(i.a,{label:"c2",dataKey:"c2",cellRenderer:function(e){var t=e.dataKey,n=e.rowData;return c.a.createElement("div",{className:"VTCellContent",style:{fontWeight:"bold",backgroundColor:n.get("color"),height:"100%",width:"100%",display:"flex",alignItems:"center"}},c.a.createElement("div",null,n.get(t)))}}),c.a.createElement(i.a,{label:"c3",dataKey:"c3"}),c.a.createElement(i.a,{label:"c4",dataKey:"c4"})))}},526:function(e,t,n){"use strict";var a=n(110),r=n(17),o=n(16),i=n(20),l=n(18),c=n(19),s=n(3),u=n(5),d=n(0),m=n.n(d),p=n(46),h=n(44),f=n(7);var b=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,c=Array(o),d=0;d<o;d++)c[d]=arguments[d];return n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c))),Object(u.a)(Object(s.a)(Object(s.a)(n)),"state",{sortingKeys:[{key:"c1",order:"ASC"}]}),Object(u.a)(Object(s.a)(Object(s.a)(n)),"handleClickHeader",function(e,t){var r=t.dataKey,o=n.state.sortingKeys,i=o.findIndex(function(e){return e.key===r});if(e.ctrlKey)0<=i?o[i]={key:r,order:"ASC"===o[i].order?"DESC":"ASC"}:o.push({key:r,order:"ASC"});else{var l="ASC";0<=i&&(l="ASC"===o[i].order?"DESC":"ASC"),o=[{key:r,order:l}]}n.setState({sortingKeys:Object(a.a)(o)})}),Object(u.a)(Object(s.a)(Object(s.a)(n)),"sortIndicatorRender",function(e){var t=e.dataKey,a=n.state.sortingKeys,r=a.findIndex(function(e){return e.key===t}),o=a[r];return o?"ASC"===o.order?m.a.createElement("div",{className:"SortIndicator ASC",style:{opacity:1-r/4}}):m.a.createElement("div",{className:"SortIndicator DESC",style:{opacity:1-r/4}}):null}),n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"getSortedData",value:function(){var e=this.state.sortingKeys;return function(e,t){var n=0;return t.forEach(function(a){var r=a.key,o=a.order;e=e.sort(function(e,a){for(var i=!0,l=0;l<n;l+=1)0!==e.get(t[l].key).localeCompare(a.get(t[l].key))&&(i=!1);if(i){var c="DESC"===o?-1:1;return e.get(r).localeCompare(a.get(r))*c}return 0}),n+=1}),e}(h.a,e)}},{key:"render",value:function(){return m.a.createElement("div",{className:"App"},m.a.createElement("div",{className:"DescriptionBlock"},"Click on header's cells to sort data. Use [",m.a.createElement("i",null,"Ctrl"),"] to multi-sort."),m.a.createElement(p.a,{className:"MyTable",width:800,height:600,data:this.getSortedData(),onHeaderClick:this.handleClickHeader,onRowClick:this.handleClickRow,rowClassName:this.getRowClassName,sortIndicatorRenderer:this.sortIndicatorRender},m.a.createElement(f.a,{label:"c1",dataKey:"c1"}),m.a.createElement(f.a,{label:"c2",dataKey:"c2"}),m.a.createElement(f.a,{label:"c3",dataKey:"c3"}),m.a.createElement(f.a,{label:"c4",dataKey:"c4"})))}}]),t}(m.a.Component);t.a=function(){return m.a.createElement(b,null)}},527:function(e,t,n){"use strict";var a=n(110),r=n(17),o=n(16),i=n(20),l=n(18),c=n(19),s=n(3),u=n(5),d=n(0),m=n.n(d),p=n(46),h=n(44),f=n(7);var b=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,c=Array(o),d=0;d<o;d++)c[d]=arguments[d];return n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c))),Object(u.a)(Object(s.a)(Object(s.a)(n)),"state",{selection:[]}),Object(u.a)(Object(s.a)(Object(s.a)(n)),"handleClickRow",function(e,t){var r=t.rowIndex,o=n.state.selection;if(e.ctrlKey)if(o.includes(r)){var i=o.filter(function(e){return e!==r});n.setState({selection:Object(a.a)(i)})}else n.setState({selection:Object(a.a)(o).concat([r])});else e.shiftKey&&o.length?(o.push(r),n.setState({selection:function(e,t){var n=[];if(t<e){var a=[t,e];e=a[0],t=a[1]}for(var r=e;r<=t;r++)n.push(r);return n}(function(e){return e.reduce(function(e,t){return t<e?t:e},e[0])}(o),function(e){return e.reduce(function(e,t){return t>e?t:e},e[0])}(o))})):n.setState({selection:[r]})}),Object(u.a)(Object(s.a)(Object(s.a)(n)),"getRowClassName",function(e){if(n.state.selection.includes(e))return"RowSelected"}),n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"App"},m.a.createElement("div",{className:"DescriptionBlock"},"Use [",m.a.createElement("i",null,"Ctrl"),"] and [",m.a.createElement("i",null,"Shift"),"] keys to multi-select rows."),m.a.createElement(p.a,{className:"MyTable",width:800,height:600,data:h.a,onRowMouseDown:this.handleClickRow,rowClassName:this.getRowClassName},m.a.createElement(f.a,{label:"c1",dataKey:"c1"}),m.a.createElement(f.a,{label:"c2",dataKey:"c2"})))}}]),t}(m.a.Component);t.a=function(){return m.a.createElement(b,null)}},528:function(e,t,n){"use strict";var a=n(17),r=n(16),o=n(20),i=n(18),l=n(19),c=n(3),s=n(5),u=n(46),d=n(44),m=n(55),p=n(7),h=n(0),f=n.n(h);function b(e,t){return Math.floor(Math.random()*(t-e+1))+e}var C=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,l=Array(r),u=0;u<r;u++)l[u]=arguments[u];return n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l))),Object(s.a)(Object(c.a)(Object(c.a)(n)),"scrollToRandomElement",function(){n.table.scrollToItem(b(0,d.a.size))}),Object(s.a)(Object(c.a)(Object(c.a)(n)),"scrollToRandomOffset",function(){var e=n.table.listOuter.scrollHeight;n.table.scrollTo(b(0,e))}),n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return f.a.createElement("div",{className:"App"},f.a.createElement("div",{className:"DescriptionBlock"},f.a.createElement("button",{type:"button",onClick:this.scrollToRandomElement},"Scroll to random element"),f.a.createElement("button",{type:"button",onClick:this.scrollToRandomOffset},"Scroll to random offset")),f.a.createElement(u.a,{className:"MyTable",width:800,height:600,data:d.a,onRowClick:Object(m.action)("row clicked"),dynamicColumnWidth:!1,disableHeader:!1,ref:function(t){return e.table=t}},f.a.createElement(p.a,{label:"c1",dataKey:"c1",width:500}),f.a.createElement(p.a,{label:"c2",dataKey:"c2",cellRenderer:function(e){var t=e.dataKey,n=e.rowData;return f.a.createElement("div",{className:"VTCellContent",style:{fontWeight:"bold",backgroundColor:n.get("color")}},n.get(t))}}),f.a.createElement(p.a,{label:"c3",dataKey:"c3"}),f.a.createElement(p.a,{label:"c4",dataKey:"c4"})))}}]),t}(f.a.Component);t.a=function(){return f.a.createElement(C,null)}},529:function(e,t,n){"use strict";var a=n(17),r=n(16),o=n(20),i=n(18),l=n(19),c=n(3),s=n(5),u=n(46),d=n(44),m=n(55),p=n(7),h=n(0),f=n.n(h),b=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,l=Array(r),u=0;u<r;u++)l[u]=arguments[u];return n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l))),Object(s.a)(Object(c.a)(Object(c.a)(n)),"state",{condition:1}),Object(s.a)(Object(c.a)(Object(c.a)(n)),"handleChangeCondition",function(){var e=n.state.condition;n.setState({condition:1===e?2:1})}),n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.condition;return f.a.createElement("div",{className:"App"},f.a.createElement("div",{className:"DescriptionBlock"},f.a.createElement("button",{type:"button",onClick:this.handleChangeCondition},"Change condition")),f.a.createElement(u.a,{className:"MyTable",width:800,height:600,data:d.a,rowHeight:function(){return Math.floor(20+60*Math.random())},onRowClick:Object(m.action)("row clicked"),disableHeader:!1},f.a.createElement(p.a,{label:"c1",dataKey:"c1",width:500}),f.a.createElement(p.a,{label:"c2",dataKey:"c2",cellRenderer:function(e){var t=e.dataKey,n=e.rowData;return f.a.createElement("div",{className:"VTCellContent",style:{fontWeight:"bold",backgroundColor:n.get("color"),height:"100%",width:"100%",display:"flex",alignItems:"center"}},f.a.createElement("div",null,n.get(t)))}}),2===e&&f.a.createElement(p.a,{label:"c3",dataKey:"c3"}),f.a.createElement(p.a,{label:"c4",dataKey:"c4"})))}}]),t}(f.a.Component);t.a=function(){return f.a.createElement(b,null)}},531:function(e,t,n){"use strict";var a=n(209),r=n(187),o=n(46),i=n(210).a,l=n(44),c=n(55),s=n(7),u=n(0),d=n.n(u),m=function(e){var t=e.index,n=e.style;return 0==t%10?d.a.createElement("div",Object(a.a)({style:Object(r.a)({},n,{lineHeight:n.height+"px"})},{className:"CustomRow"}),"This is #",t/10+1," row rendered by custom renderer!"):d.a.createElement(i,e)};t.a=function(){return d.a.createElement("div",{className:"App"},d.a.createElement(o.a,{className:"MyTable",width:800,height:600,data:l.a,rowRenderer:m,onRowClick:Object(c.action)("row clicked"),dynamicColumnWidth:!0,disableHeader:!1},!1,d.a.createElement(s.a,{label:"c1",dataKey:"c1",width:500}),d.a.createElement(s.a,{label:"c2",dataKey:"c2"}),d.a.createElement(s.a,{label:"c3",dataKey:"c3"}),d.a.createElement(s.a,{label:"c4",dataKey:"c4",width:60})))}},532:function(e,t,n){n(213),n(533),e.exports=n(534)},534:function(e,t,n){"use strict";n.r(t),function(e){var t=n(208);Object(t.configure)(function(){n(547)},e)}.call(this,n(312)(e))},547:function(e,t,n){"use strict";n.r(t),function(e){var t=n(208),a=(n(548),n(551),n(524)),r=n(526),o=n(527),i=n(531),l=n(528),c=n(529);Object(t.storiesOf)("Table",e).add("Simple table",a.a).add("Table with sorting",r.a).add("Table with selection",o.a).add("Scroll to item",l.a).add("Custom row renderer",i.a).add("Change columns",c.a)}.call(this,n(312)(e))},548:function(e,t,n){var a=n(549);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(456)(a,r);a.locals&&(e.exports=a.locals)},549:function(e,t,n){(e.exports=n(455)(!1)).push([e.i,".VTContainer {\n    position: relative;\n}\n\n.VTList {\n    overflow-y: scroll !important;\n}\n\n.VTHeader {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    background-color: #e1e8ed;\n}\n\n.VTGrid {\n    outline: 1px solid #5c7080;\n}\n\n.VTHeader {\n    position: absolute;\n    display: flex;\n    flex-flow: row nowrap;\n    height: 100%;\n    align-items: stretch;\n    overflow: hidden;\n}\n\n.VTRow {\n    display: flex;\n    flex-flow: row nowrap;\n    height: 100%;\n    align-items: stretch;\n    box-sizing: border-box;\n}\n\n.VTRowOdd {\n    background-color: #fff;\n}\n\n.VTRowEven {\n    background-color: #f5f8fa;\n}\n\n.VTCell,\n.VTHeaderCell {\n    flex-grow: 1;\n    box-sizing: border-box;\n    position: relative;\n    align-items: center;\n    display: flex;\n}\n\n.VTHeaderCell {\n    border-right: 1px solid #bfccd6;\n}\n\n.VTCell {\n    border-right: 1px solid #e1e8ed;\n    border-bottom: 1px solid #ced9e0;\n}\n\n.VTHeader {\n    box-sizing: border-box;\n    border-bottom: 2px solid #5c7080;\n    font-weight: bold;\n}\n\n.VTHeaderCell:last-of-type {\n    border-right: 0;\n}\n\n.VTCellContent {\n    overflow: hidden;\n    padding: 0 0.5em;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.VTColumnResizer {\n    cursor: col-resize;\n    position: absolute;\n    right: -3px;\n    top: 0;\n    height: 100%;\n    background-color: #1f4b99;\n    opacity: 0;\n    width: 6px;\n    z-index: 20;\n}\n\n.VTColumnResizer:hover {\n    opacity: 0.1;\n}\n\n.VTColumnResizerActive {\n    opacity: 0.5 !important;\n    transition: opacity 200ms;\n}\n\n.VTNoItemsLabel {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1em;\n    color: #bdbdbd;\n}\n",""])},551:function(e,t,n){var a=n(552);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(456)(a,r);a.locals&&(e.exports=a.locals)},552:function(e,t,n){(e.exports=n(455)(!1)).push([e.i,".MyTable {\n    border: 1px solid #d8e1e8;\n    border-radius: 3px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    transition: transform 0.2s cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 0.2s cubic-bezier(0.4, 1, 0.75, 0.9),\n        -webkit-transform 0.2s cubic-bezier(0.4, 1, 0.75, 0.9);\n    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 1px 1px rgba(16, 22, 26, 0.2), 0 2px 6px rgba(16, 22, 26, 0.2);\n    font-size: 14px;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',\n        'Droid Sans', 'Helvetica Neue', sans-serif;\n}\n\n.SortIndicator {\n    position: absolute;\n    right: 5px;\n    top: 5px;\n}\n\n.SortIndicator.ASC {\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n\n    border-bottom: 5px solid #0e5a8a;\n}\n\n.SortIndicator.DESC {\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n\n    border-top: 5px solid #0e5a8a;\n}\n\n.SortIndicator > .counter {\n    position: absolute;\n    font-size: small;\n}\n\n.RowSelected {\n    background-color: #48aff0;\n    color: #fff;\n}\n\n.CustomRow {\n    background-color: #f5498b;\n    color: #fff;\n    font-weight: bold;\n    padding: 0 40px;\n    box-sizing: border-box;\n}\n\n.DescriptionBlock {\n    margin-bottom: 10px;\n}\n",""])},7:function(e,t,n){"use strict";var a=n(211);t.a=a.a}},[[532,3,2]]]);
//# sourceMappingURL=iframe.c65baca801417842a5ca.bundle.js.map