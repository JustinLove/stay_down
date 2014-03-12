(function() {
  if (model.buildVersion() != '62519') {
    $('body').append('<div class="stay_down_obsolete">Stay Down is Obsolete, please uninstall it.</div>')
    return
  }


  model.alwaysPlayerListPanel = ko.observable(false).extend({local: 'stay_down_always_players'})
  model.hoverPlayerListPanel = ko.observable(false)
  model.showPlayerListPanel = ko.computed(function() {
    return model.hoverPlayerListPanel() || model.alwaysPlayerListPanel()
  })

  $('.div_player_list_panel').attr('data-bind', 'event: { ' +
    'mouseover: function () { model.hoverPlayerListPanel(true) }, ' +
    'mouseleave: function () { model.hoverPlayerListPanel(false) }' +
  ' }')

  $('.div_player_list_control').on('click', function() {
    model.alwaysPlayerListPanel(!model.alwaysPlayerListPanel())
  })

  $('.div_player_list_panel .control_chevron_auto')
    .attr('data-bind', 'css: {control_chevron_reverse: alwaysPlayerListPanel}')

  model.alwaysCelestialViewModels = ko.observable(false).extend({local: 'stay_down_always_celestial'})
  model.hoverCelestialViewModels = ko.observable(false)
  model.collapseCelestialViewModels = ko.computed(function() {
    return !(model.hoverCelestialViewModels() || model.alwaysCelestialViewModels())
  })

  $('.div_planet_list_panel').attr('data-bind', 'event: { ' +
    'mouseover: function () { model.hoverCelestialViewModels(true) }, ' +
    'mouseleave: function () { model.hoverCelestialViewModels(false) }' +
  '}')

  $('.div_planet_list_control').on('click', function() {
    model.alwaysCelestialViewModels(!model.alwaysCelestialViewModels())
  })

  $('.div_planet_list_panel .control_chevron_auto')
    .attr('data-bind', 'css: {control_chevron_reverse: alwaysCelestialViewModels}')

  $('#version_info').css('text-align', 'center')
})()
