// 从 GitHub API 获取 link 仓库的星标和拉取数，显示在右上角导航栏
(function () {
  'use strict';

  const REPO = 'myiunagn/link';
  const API_URL = `https://api.github.com/repos/${REPO}`;

  // 获取仓库数据
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      if (data.stargazers_count === undefined) return;

      // 等待导航栏加载完成
      const waitForHeader = setInterval(() => {
        const header = document.querySelector('.md-header__topic');
        if (!header) return;
        clearInterval(waitForHeader);

        const repoLink = document.querySelector('.md-header__source');
        if (!repoLink) return;

        // 创建统计信息容器
        const stats = document.createElement('div');
        stats.className = 'link-repo-stats';
        stats.style.cssText = 'display:flex;gap:12px;font-size:0.7rem;align-items:center;';

        const stars = formatNumber(data.stargazers_count);
        const forks = formatNumber(data.forks_count);

        stats.innerHTML = `
          <span title="Stars" style="display:flex;align-items:center;gap:3px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            ${stars}
          </span>
          <span title="Forks" style="display:flex;align-items:center;gap:3px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 3a3 3 0 11-.001 6.001A3 3 0 016 3zm0 12a3 3 0 11-.001 6.001A3 3 0 016 15zm12-9a3 3 0 11-6 0 3 3 0 016 0zm-1.5 6.5a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            ${forks}
          </span>
        `;

        // 插入到仓库链接旁边
        repoLink.appendChild(stats);
      }, 100);
    })
    .catch(() => {});

  // 格式化数字（1.2k, 3.4k 等）
  function formatNumber(n) {
    if (n >= 1000) {
      return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return String(n);
  }
})();
