const items = [
    { id: "L", color: "#A5D8FF" },
    { id: "TL", color: "#FFD6A5" },
    { id: "F", color: "#FDC5C5" },
    { id: "U", color: "#E0BBE4" }
];

let currentIndex = 0;

setInterval(() => {
    items.forEach(item => {
        document.getElementById(item.id).style.color = "#5A5A72";
        document.getElementById(item.id).style.fontWeight = "500";
    });
    const currentItem = items[currentIndex];
    document.getElementById(currentItem.id).style.color = currentItem.color;
    currentIndex = (currentIndex + 1) % items.length;
}, 800); 