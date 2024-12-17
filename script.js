// 模拟教育科研资料数据
const data = [
    {
        "title": "教育心理学研究",
        "description": "该文献介绍了教育心理学的基础理论及其应用。",
        "link": "https://example.com/education-psychology"
    },
    {
        "title": "现代教育技术的应用",
        "description": "这篇文章探讨了现代教育技术在课堂中的使用。",
        "link": "https://example.com/modern-tech-in-education"
    },
    {
        "title": "高等教育改革的挑战",
        "description": "分析了当前高等教育改革中的主要问题与挑战。",
        "link": "https://example.com/higher-education-reform"
    }
];

// 搜索功能
function searchData() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const results = document.getElementById('results');
    results.innerHTML = '';  // 清空现有搜索结果

    // 遍历数据，根据查询关键词进行匹配
    const filteredData = data.filter(item => {
        return item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query);
    });

    // 显示匹配结果
    if (filteredData.length > 0) {
        filteredData.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('result-item');
            div.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="${item.link}" target="_blank">查看详情</a>
            `;
            results.appendChild(div);
        });
    } else {
        results.innerHTML = "<p>没有找到相关资料。</p>";
    }
}
