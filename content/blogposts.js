import JquerySelectorPerformance from '~/assets/img/jquery-selector-performance.png';
import MyVisualStudioCodeSetupImage from '~/assets/img/my-visual-studio-code-setup.png';
import WritingAProgressiveImageLoadingComponentImage from '~/assets/img/writing-a-progressive-image-loading-component-in-vue.js.png';
import UnitTestingVueJsComponentsWithJest from '~/assets/img/unit-testing-vue-js-components-with-jest.png';
import LargeScaleVuexApplicationStructures from '~/assets/img/large-scale-vuex-application-structures.png';
import WhatHappenedToVuejsIn2017 from '~/assets/img/what-happened-to-vuejs-in-2017.png';
import ComposingComputedPropertiesInVueJs from '~/assets/img/composing-computed-properties-in-vue-js.png';
import AutoFormatterForPythonImage from '~/assets/img/auto-formatters-for-python.png';

const blogposts = [
  {
    title: 'Auto formatters for Python',
    description:
      'Blog article showing the different possibilities to format code within Python with automatic tooling. It will focus on the difference of the tools and showcase edge-cases where the tools behave differently.',
    url: 'https://medium.com/3yourmind/auto-formatters-for-python-8925065f9505',
    previewImage: AutoFormatterForPythonImage,
    altTag:
      'image gradient from red to purple and showing the names black, autopep8 and yapf which are auto formatters for python',
    type: 'medium',
  },
  {
    title: 'Composing computed properties in Vue.js',
    description:
      'Composing computed properties in Vue.js can outgrow in applications really fast. This article concentrates on how to apply patterns to keep computed properties readable and easy.',
    url:
      'https://medium.com/@kevin_peters/composing-computed-properties-in-vue-js-87b4507af079',
    previewImage: ComposingComputedPropertiesInVueJs,
    altTag:
      'computed:{commentsMapped(state){constparentComments=[];constmappedComments=state.comments.comments.map(comment=>{constcopy=Object.assign({},comment);copy.isOwner=comment.user.id===state.comments.userData.userId;returncopy;});mappedComments.forEach(comment=>{if(comment.parent===null){constcopy=Object.assign({},comment);copy.textarea.showCommentButton=comment.textarea.text.length>0;parentComments.push(copy);}});',
    type: 'medium',
  },
  {
    title: 'What happened to Vue.js in 2017',
    description:
      "Vue.js performed really great in 2017. Gained a lot in attraction and evolved a lot. Let's see what happened and if the goals of the last year are fulfilled.",
    url:
      'https://medium.com/@kevin_peters/what-happened-to-vue-js-in-2017-aeaaa69c2c6f',
    previewImage: WhatHappenedToVuejsIn2017,
    altTag: 'image showing the vue.js logo and the number 2017',
    type: 'medium',
  },
  {
    title: 'Large-scale Vuex application structures',
    description:
      'Writing large-scale Vue.js + Vuex applications is hard. This blog article will teach you how to structure Vuex-related applications in a scalable way.',
    url:
      'https://medium.com/3yourmind/large-scale-vuex-application-structures-651e44863e2f',
    previewImage: LargeScaleVuexApplicationStructures,
    altTag: 'image showing a diagram of state management in vuex',
    type: 'medium',
  },
  {
    title: 'Unit testing Vue.js components with Jest',
    description:
      'Article to show how to setup Jest in an Vue.js application. This will guide you through everything in a blank Vue.js template to test components and more.',
    url: '/blog/unit-testing-vue-js-components-with-jest',
    previewImage: UnitTestingVueJsComponentsWithJest,
    altTag: 'Vue.js and Jest logo on some generic paper background',
    type: null,
  },
  {
    title: 'jQuery Selector Performance',
    description:
      'Are jQuery selectors a good idea and how can we improve performance. A good guide on how to reduce loading times inside of big JavaScript applications. With the help of the Chrome developer tools (dev tools) we will analyse on how to optimize jQuery selectors.',
    url: '/blog/jquery-selector-performance',
    previewImage: JquerySelectorPerformance,
    altTag: 'image showing a laptop',
    type: null,
  },
  {
    title: 'My Visual Studio Code setup',
    description:
      'A blogpost about Visual Studio Code, the installation of the editor and the basic setup of the plugin settings sync.',
    url: '/blog/my-visual-studio-code-setup-part-one',
    previewImage: MyVisualStudioCodeSetupImage,
    altTag: 'image showing a laptop',
    type: null,
  },
  {
    title: 'Writing a progressive image loading component in vue.js',
    description:
      'We want small load times for images, but when we are on mobile there is not always a good connection so we could use a placeholder or an image reduced in size so it loads faster.',
    url: '/blog/writing-a-progressive-image-loading-component',
    previewImage: WritingAProgressiveImageLoadingComponentImage,
    altTag: 'picture of an island out of birds perspective',
    type: null,
  },
];

export default blogposts;
