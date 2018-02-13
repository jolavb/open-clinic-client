export default function(){
    this.transition(
      this.fromRoute('studies'),
      this.toRoute('study'),
      this.use('toLeft'),
    );
    this.transition(
      this.fromRoute('index'),
      this.toRoute('studies'),
      this.use('toLeft'),
    );
    this.transition(
      this.fromRoute('u-sponsors'),
      this.toRoute('u-sponsor'),
      this.use('toLeft'),
    );
}
