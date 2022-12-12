import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {
chart: any;
	
chartOptions = {
  title:{
    text: "Total Impressions by Platforms"
  },
  animationEnabled: true,
  axisY: {
    includeZero: true,
    suffix: "K"
  },
  data: [{
    type: "bar",
    indexLabel: "{y}",
    yValueFormatString: "#,###K",
    dataPoints: [
      { label: "Snapchat", y: 15 },
      { label: "Instagram", y: 20 },
      { label: "YouTube", y: 24 },
      { label: "Twitter", y: 29 },
      { label: "Facebook", y: 73 }
    ]
  }]
}
}
