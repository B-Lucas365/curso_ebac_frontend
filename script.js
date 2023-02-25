$(document).ready(function() {
    // Adiciona tarefa ao enviar o formulário
    $('#add-task-btn').click(function(event) {
      event.preventDefault(); // Previne o comportamento padrão do formulário de recarregar a página
      
      var taskName = $('#new-task').val();
      if (taskName.trim() === '') { // Verifica se o nome da tarefa está vazio
        alert('Por favor, adicione um nome para a tarefa.');
        return;
      }
      
      $('#task-list').append('<li>' + taskName + '</li>');
      $('#new-task').val('');
    });
    
    // Marca tarefa como concluída quando clicada
    $('#task-list').on('click', 'li', function() {
      $(this).toggleClass('done');
    });
  });