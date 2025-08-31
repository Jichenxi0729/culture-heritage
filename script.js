// 筛选功能
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const heritageCards = document.querySelectorAll('.heritage-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 更新按钮激活状态
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            // 筛选卡片
            heritageCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.getAttribute('data-type') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // 添加卡片点击事件，跳转到详情页
    heritageCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // 防止点击链接时触发卡片点击事件
            if (e.target.tagName !== 'A' && e.target.tagName !== 'I') {
                const title = card.querySelector('.card-title').textContent;
                alert(`即将跳转到"${title}"的详情页面`);
                // 实际应用中这里应该是跳转到详情页的代码
                // window.location.href = `detail.html?id=${card.dataset.id}`;
            }
        });
    });
});