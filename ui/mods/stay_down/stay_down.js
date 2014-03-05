(function() {
  model.alwaysPlayerListPanel = ko.observable(false).extend({local: 'stay_down_always_players'})
  model.hoverPlayerListPanel = ko.observable(false)
  model.showPlayerListPanel = ko.computed(function() {
    return model.hoverPlayerListPanel() || model.alwaysPlayerListPanel()
  })

  $('.div_player_list_panel').attr('data-bind', 'event: { ' +
    'mouseover: function () { model.hoverPlayerListPanel(true) }, ' +
    'mouseleave: function () { model.hoverPlayerListPanel(false) }, ' +
    'click: function() {model.alwaysPlayerListPanel(!model.alwaysPlayerListPanel())} }')

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

  // hotfix for invalid syntax
  $('.div_planet_list_item input[data-bind="click: function () { model.celestialControlModel.($data.index()) }"]').remove()
})()
