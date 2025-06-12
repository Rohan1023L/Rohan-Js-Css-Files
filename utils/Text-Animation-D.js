const light = [
    { id: "L-D", color: "#A5D8FF" },
    { id: "TL-D", color: "#FFD6A5" },
    { id: "F-D", color: "#FDC5C5" },
    { id: "U-D", color: "#E0BBE4" }
];

let lightIndex = 0;

setInterval(() => {
    light.forEach(item => {
        document.getElementById(item.id).style.color = "#5A5A72";
        document.getElementById(item.id).style.fontWeight = "500";
    });
    const currentItem = light[lightIndex];
    document.getElementById(currentItem.id).style.color = currentItem.color;
    lightIndex = (lightIndex + 1) % light.length;
}, 800);