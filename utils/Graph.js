


document.addEventListener("DOMContentLoaded", () => {
      const ctx = document.getElementById('radarChart').getContext('2d');

      const skillLabels = ['Html', 'Css', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MangoDB', 'Figma', 'Canva'];

      const defaultColor = 'rgb(54, 162, 235)';
      const highlightColor = 'rgb(255, 99, 132)';
      const defaultRadius = 5;
      const highlightRadius = 10;

      const radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: skillLabels,
          datasets: [{
            data: [80, 80, 80, 60, 60, 60, 60, 80, 90],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: defaultColor,
            pointBackgroundColor: skillLabels.map(() => defaultColor),
            pointRadius: skillLabels.map(() => defaultRadius),
            pointBorderWidth: skillLabels.map(() => 2),
          }]
        },
        options: {
          plugins: {
            legend: {
              display: false
            }
          },
          responsive: true,
          scales: {
            r: {
              pointLabels: {
                color: 'black',
                font: {
                  family: '"Afacad", sans-serif',
                  size: 14
                }
              },
              min: 0,
              max: 100,
              ticks: {
                stepSize: 20,
                backdropColor: 'transparent'
              }
            }
          },
          elements: {
            line: {
              borderWidth: 3
            }
          },
          animation: {
            duration: 200
          }
        }
      });

      function normalizeSkillId(id) {
        const map = {
          Html: 'Html',
          Css: 'Css',
          JavaScript: 'JavaScript',
          React: 'React.js',
          Node: 'Node.js',
          Express: 'Express.js',
          MongoDB: 'MangoDB',
          MangoDB: 'MangoDB',
          Figma: 'Figma',
          Canva: 'Canva'
        };
        return map[id] || id;
      }

      document.querySelectorAll('.icons-img li[id]').forEach(li => {
        const id = li.id;
        const skillLabel = normalizeSkillId(id);
        const index = radarChart.data.labels.findIndex(label => label === skillLabel);

        if (index !== -1) {
          li.addEventListener('mouseenter', () => {
            const dataset = radarChart.data.datasets[0];
            dataset.pointBackgroundColor = skillLabels.map(() => defaultColor);
            dataset.pointRadius = skillLabels.map(() => defaultRadius);
            dataset.pointBorderWidth = skillLabels.map(() => 2);

            dataset.pointBackgroundColor[index] = highlightColor;
            dataset.pointRadius[index] = highlightRadius;
            dataset.pointBorderWidth[index] = 3;
            radarChart.update();
          });

          li.addEventListener('mouseleave', () => {
            const dataset = radarChart.data.datasets[0];
            dataset.pointBackgroundColor = skillLabels.map(() => defaultColor);
            dataset.pointRadius = skillLabels.map(() => defaultRadius);
            dataset.pointBorderWidth = skillLabels.map(() => 2);
            radarChart.update();
          });
        }
      });
    });