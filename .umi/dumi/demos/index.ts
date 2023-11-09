// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!/Users/xuying/my-hooks/packages/hooks/src/useBoolean/demo/demo1.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!/Users/xuying/my-hooks/packages/hooks/src/useDebounce/demo/demo1.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!/Users/xuying/my-hooks/packages/hooks/src/useDebounce/index.ts?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!/Users/xuying/my-hooks/packages/hooks/src/useLatest/demo/demo1.tsx?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!/Users/xuying/my-hooks/packages/hooks/src/useLatest/index.ts?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!/Users/xuying/my-hooks/packages/hooks/src/useTitle/demo/demo1.tsx?dumi-raw-code';
import rawCode7 from '!!dumi-raw-code-loader!/Users/xuying/my-hooks/packages/hooks/src/useToggle/demo/demo1.tsx?dumi-raw-code';
import rawCode8 from '!!dumi-raw-code-loader!/Users/xuying/my-hooks/packages/hooks/src/useToggle/demo/demo2.tsx?dumi-raw-code';
import rawCode9 from '!!dumi-raw-code-loader!/Users/xuying/my-hooks/packages/hooks/src/useUnmount/demo/demo1.tsx?dumi-raw-code';

export default {
  'useboolean-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/xuying/my-hooks/packages/hooks/src/useBoolean/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"useboolean-demo1"},
  },
  'usedebounce-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/xuying/my-hooks/packages/hooks/src/useDebounce/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode2},"index.ts":{"import":"..","content":rawCode3}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"usedebounce-demo1"},
  },
  'uselatest-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/xuying/my-hooks/packages/hooks/src/useLatest/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode4},"index.ts":{"import":"..","content":rawCode5}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"uselatest-demo1"},
  },
  'usetitle-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/xuying/my-hooks/packages/hooks/src/useTitle/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode6}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"usetitle-demo1"},
  },
  'usetoggle-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/xuying/my-hooks/packages/hooks/src/useToggle/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode7}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"usetoggle-demo1"},
  },
  'usetoggle-demo2': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/xuying/my-hooks/packages/hooks/src/useToggle/demo/demo2.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode8}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"usetoggle-demo2"},
  },
  'useunmount-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/xuying/my-hooks/packages/hooks/src/useUnmount/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode9}},"dependencies":{"react":{"version":">=16.9.0"},"antd":{"version":"5.10.2"},"react-dom":{"version":">=16.9.0"}},"identifier":"useunmount-demo1"},
  },
};
