import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-item-presenca',
  templateUrl: './item-presenca.component.html',
  styleUrls: ['./item-presenca.component.scss']
})
export class ItemPresencaComponent implements OnInit {

  @Input('dataInicio')
  private cursoInicio: Date;

  @Input('dataFim')
  private cursoFim: Date;

  @Input()
  private periodoInicial: Date;

  @Input()
  private periodoFinal: Date;

  @Input()
  private presencas: Array<String>;

  public presenca = [];

  constructor() { }

  ngOnInit() {
    const inicio = moment(this.cursoInicio).isSameOrAfter(this.periodoInicial) ? this.cursoInicio : this.periodoInicial;
    const fim = moment(this.cursoFim).isSameOrBefore(this.periodoFinal) ? this.cursoFim : this.periodoFinal;
    const dataCurso = moment(inicio);
    while (dataCurso.isSameOrBefore(fim)) {
      if (dataCurso.weekday() > 0 && dataCurso.weekday() < 6) {
        this.presenca.push({
          data: dataCurso.toDate(),
          presente: this.presencas.includes(dataCurso.format('YYYY-MM-DD'))
        });
      }
      dataCurso.add(1, 'days');
    }
  }
}
