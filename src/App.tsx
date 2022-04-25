import React, { useState } from 'react';
import LazyLoad from './component/lazyLoad';
import './App.css';

/**
 * React.lazy 接受一个Promise，处理成功后返回一个React.FC，这里可以手动返回一个Promise，设置定时器，延迟返回组件查看懒加载效果
 * 也可以直接在浏览器开发者工具，选择网络节流，模拟3G网络查看懒加载效果
 */
const pages = [
  { label: '首页', component: React.lazy(() => import('./pages/home')) },
  { label: '新闻', component: React.lazy(() => import('./pages/news')) },
  { label: '消息', component: React.lazy(() => import('./pages/message')) },
  { label: '登录', component: React.lazy(() => import('./pages/login')) },
  { label: '关于', component: React.lazy(() => import('./pages/about')) },
];

function App() {
  const [label, setLabel] = useState(pages[0].label);

  const handleLinkClick = (label: string) => {
    setLabel(label);
  };

  return (
    <div className='app'>
      {pages.map(p => (
        <li key={p.label} onClick={handleLinkClick.bind(undefined, p.label)}>
          {p.label}
        </li>
      ))}
      <hr />

      <div className='notice'>
        <header>Info</header>
        <p>
          懒加载又叫做延迟加载，是指在资源需要用的的时候才请求资源，而不是页面加载时一起加载，这样可以提高页面加载速度减少白屏时间，提升用户体验
        </p>
        <p>打开控制台，选择网络tab，开启节流模式，选择低速3G，然后点击上方链接查看懒加载效果</p>
      </div>

      {pages.map(p => {
        if (p.label === label) {
          return <LazyLoad component={p.component} />;
        }
      })}
    </div>
  );
}

export default App;
