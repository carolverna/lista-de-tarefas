$(document).ready(function () {

  $('#form-tarefa').submit(function (e) {
    e.preventDefault();

    const nomeTarefa = $('#nome-tarefa').val();

    if (nomeTarefa.trim() !== '') {
      $('#lista-tarefas').append(`<li>${nomeTarefa}</li>`);
      $('#nome-tarefa').val('');
    }
  });

  // aplicar riscado ao clicar
  $('#lista-tarefas').on('click', 'li', function () {
    $(this).toggleClass('concluida');
  });

});