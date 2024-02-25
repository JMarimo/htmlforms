import Button from './Button';
import Tooltip from './Tooltip';
import TooltipSwitch from './TooltipSwitch';

const button = new Button('Каждое задание со слезами и соплями');
const tooltip = new Tooltip(
  'Не унывать"',
  "Под лежачий камень вода ещё может затечь, а под обмазанный соплями - нет. Он гидроизолирован.",
);
const tooltipSwitch = new TooltipSwitch(button, tooltip);
tooltipSwitch.bindToDOM(document.querySelector('.component'));
tooltipSwitch.init();