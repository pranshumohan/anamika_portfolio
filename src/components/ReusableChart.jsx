import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Constants mimicking original design but with optimized contrast
const A = '#f59e0b';
const A2 = 'rgba(245,158,11,.18)';
const A3 = 'rgba(245,158,11,.5)';
const G = 'rgba(255,255,255,.12)';  // Lighter grid lines for better contrast
const GT = '#cccccc';               // Brightened label color for high legibility

const globalOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#1c1c28',
      titleColor: '#fbbf24',
      bodyColor: '#9898b0',
      padding: 10,
      cornerRadius: 6,
      titleFont: { family: "'JetBrains Mono',monospace", size: 10 },
      bodyFont: { family: "'JetBrains Mono',monospace", size: 10 }
    }
  },
  scales: {
    x: {
      grid: { color: G },
      ticks: {
        color: GT,
        font: { family: "'JetBrains Mono',monospace", size: 9 }
      }
    },
    y: {
      grid: { color: G },
      ticks: {
        color: GT,
        font: { family: "'JetBrains Mono',monospace", size: 9 }
      }
    }
  }
};

export const ReusableChart = ({ type, data, config }) => {
  if (type === 'line') {
    const lineData = {
      labels: data.labels,
      datasets: [
        {
          data: data.data,
          borderColor: A,
          backgroundColor: A2,
          borderWidth: 2,
          pointBackgroundColor: A,
          pointRadius: 3,
          pointHoverRadius: 5,
          fill: true,
          tension: 0.4
        }
      ]
    };

    const options = {
      ...globalOptions,
      plugins: {
        ...globalOptions.plugins,
        tooltip: {
          ...globalOptions.plugins.tooltip,
          callbacks: {
            label: (c) => ` ${c.parsed.y.toLocaleString()} impressions`
          }
        }
      },
      scales: {
        ...globalOptions.scales,
        y: {
          ...globalOptions.scales.y,
          ticks: {
            ...globalOptions.scales.y.ticks,
            callback: (v) => (v >= 1000 ? `${(v / 1000).toFixed(0)}K` : v)
          }
        }
      }
    };

    return <Line data={lineData} options={options} />;
  }

  if (type === 'bar') {
    // Horizontal bar chart for CPL Demographics (with slightly lighter grey columns to prevent merging)
    const barData = {
      labels: data.labels,
      datasets: [
        {
          data: data.data,
          backgroundColor: [A, A3, A3, 'rgba(255,255,255,.35)', 'rgba(255,255,255,.20)'],
          borderRadius: 5,
          borderSkipped: false
        }
      ]
    };

    const options = {
      ...globalOptions,
      indexAxis: 'y',
      plugins: {
        ...globalOptions.plugins,
        tooltip: {
          ...globalOptions.plugins.tooltip,
          callbacks: {
            label: (c) => {
              const leadVal = data.leads[c.dataIndex];
              return ` ₹${c.parsed.x.toFixed(2)} CPL · ${leadVal} leads`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: G },
          ticks: {
            color: GT,
            font: { family: "'JetBrains Mono',monospace", size: 9 },
            callback: (v) => '₹' + v
          }
        },
        y: {
          grid: { display: false },
          ticks: {
            color: GT,
            font: { family: "'JetBrains Mono',monospace", size: 9 }
          }
        }
      }
    };

    return <Bar data={barData} options={options} />;
  }

  if (type === 'double-bar') {
    // Vertical double bar for IIT JEE Comparison (with lighter grey columns to prevent merging)
    const doubleBarData = {
      labels: data.labels,
      datasets: [
        {
          label: 'Leads',
          data: data.leads,
          backgroundColor: [A3, A],
          borderRadius: 5,
          borderSkipped: false,
          yAxisID: 'yL'
        },
        {
          label: 'Reach ÷1000',
          data: data.reach,
          backgroundColor: ['rgba(255,255,255,.30)', 'rgba(255,255,255,.45)'],
          borderRadius: 5,
          borderSkipped: false,
          yAxisID: 'yR'
        }
      ]
    };

    const options = {
      ...globalOptions,
      plugins: {
        ...globalOptions.plugins,
        legend: {
          display: true,
          labels: {
            color: GT,
            boxWidth: 10,
            padding: 12,
            font: { family: "'JetBrains Mono',monospace", size: 10 }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            color: GT,
            font: { family: "'JetBrains Mono',monospace", size: 9 }
          }
        },
        yL: {
          type: 'linear',
          position: 'left',
          grid: { color: G },
          ticks: {
            color: GT,
            font: { family: "'JetBrains Mono',monospace", size: 9 }
          },
          title: {
            display: true,
            text: 'Leads',
            color: GT,
            font: { family: "'JetBrains Mono',monospace", size: 9 }
          }
        },
        yR: {
          type: 'linear',
          position: 'right',
          grid: { display: false },
          ticks: {
            color: GT,
            font: { family: "'JetBrains Mono',monospace", size: 9 }
          },
          title: {
            display: true,
            text: 'Reach (K)',
            color: GT,
            font: { family: "'JetBrains Mono',monospace", size: 9 }
          }
        }
      }
    };

    return <Bar data={doubleBarData} options={options} />;
  }

  if (type === 'doughnut') {
    // Seniority Breakdown Doughnut
    const doughnutData = {
      labels: data.labels,
      datasets: [
        {
          data: data.data,
          backgroundColor: ['#f59e0b', '#fbbf24', '#d97706', '#fde68a', '#92400e', '#78350f'],
          borderWidth: 0,
          hoverOffset: 4
        }
      ]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '60%',
      plugins: {
        legend: {
          display: true,
          position: 'right',
          labels: {
            color: '#cccccc',
            boxWidth: 10,
            padding: 9,
            font: { family: "'JetBrains Mono',monospace", size: 11 }
          }
        },
        tooltip: {
          backgroundColor: '#1c1c28',
          titleColor: '#fbbf24',
          bodyColor: '#9898b0',
          padding: 10,
          cornerRadius: 6,
          titleFont: { family: "'JetBrains Mono',monospace", size: 10 },
          bodyFont: { family: "'JetBrains Mono',monospace", size: 10 },
          callbacks: {
            label: (c) => ` ${c.label}: ${c.parsed} followers`
          }
        }
      }
    };

    return <Doughnut data={doughnutData} options={options} />;
  }

  return null;
};
