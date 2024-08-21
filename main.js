$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        const novaTarefa = $('<li></li>')
            .text($('#nova-tarefa').val())
            .css('cursor', 'pointer')
            .click(function(){
                $(this).css('text-decoration', 'line-through');
            });

        $('ul').append(novaTarefa);
        $('#nova-tarefa').val('');
    });
});