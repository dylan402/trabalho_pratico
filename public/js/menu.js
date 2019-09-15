$(document).ready(function() {
  $('#placa').mask('AAA-0000', {
    translation: {
      A: { pattern: /[A-Za-z]/ },
    },
  });

  $('#FormVeiculo').on('submit', function() {
    event.preventDefault();

    if (this.checkValidity() === false) {
      return false;
    }

    $.ajax({
      url: '/menu/save-vehicle',
      method: 'POST',
      data: $(this).serialize(),
      cache: false,
      dataType: 'html',
      success: response => {
        $.alert({
          title: 'Registro de veículo',
          content: response,
          onClose: () => (window.location.href = '/menu'),
        });
      },
      error: response => {
        $.alert(response.responseText, 'Registro de veículo');
      },
    });
  });

  $('#FormVeiculoUpdate').on('submit', function() {
    event.preventDefault();

    if (this.checkValidity() === false) {
      return false;
    }

    $.ajax({
      url: '/menu/save-vehicle',
      method: 'POST',
      data: $(this).serialize(),
      cache: false,
      dataType: 'html',
      success: response => {
        $.alert({
          title: 'Registro de veículo',
          content: response,
          onClose: () => (window.location.href = '/menu'),
        });
      },
      error: response => {
        $.alert(response.responseText, 'Registro de veículo');
      },
    });
  });

  $('form.delete').on('submit', function() {
    event.preventDefault();

    $.confirm({
      title: 'Exclusão de veículo',
      content: 'Você deseja excluir o veículo?',
      buttons: {
        confirmar: () => {
          $.ajax({
            url: this.action,
            method: 'POST',
            cache: false,
            dataType: 'html',
            success: response => {
              $.alert({
                title: 'Exclusão de veículo',
                content: response,
                onClose: () => (window.location.href = '/menu'),
              });
            },
            error: response => {
              $.alert({
                title: 'Exclusão de veículo',
                content: response.responseText,
                onClose: () => (window.location.href = '/menu'),
              });
            },
          });
        },
        Cancelar: {
          btnClass: 'btn-danger',
          cancelar: function() {},
        },
      },
    });
  });
});

function carregarFormulario(id) {
  let url;

  if (id) {
    url = `/menu/form-vehicle/${id}`;
    $('#navFormVehicle').tab('show');
  } else {
    url = '/menu/form-vehicle';
  }

  $.ajax({
    url,
    method: 'POST',
    cache: false,
    dataType: 'html',
    success: response => {
      $('#tabFormVehicle').html(response);
    },
    error: response => {
      $('#tabFormVehicle').html(response.responseText);
    },
  });
}
