/* eslint-disable quote-props */
/* eslint-disable key-spacing */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-spacing */
/* eslint-disable object-curly-spacing */
/* eslint-disable object-curly-newline */

export function darkskyForecast(f, location, unit) {
  f({"latitude":48.477231,"longitude":15.673781,"timezone":"Europe/Vienna","currently":{"time":1557163230,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":47.68,"apparentTemperature":43.22,"dewPoint":33.93,"humidity":0.59,"pressure":1016.87,"windSpeed":9.84,"windGust":19.23,"windBearing":317,"cloudCover":1,"uvIndex":0,"visibility":10,"ozone":419.97},"hourly":{"summary":"Mostly cloudy throughout the day.","icon":"partly-cloudy-night","data":[{"time":1557162000,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":48.2,"apparentTemperature":43.7,"dewPoint":33.96,"humidity":0.58,"pressure":1016.72,"windSpeed":10.28,"windGust":19.52,"windBearing":319,"cloudCover":1,"uvIndex":0,"visibility":10,"ozone":420.25},{"time":1557165600,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":46.69,"apparentTemperature":42.3,"dewPoint":33.85,"humidity":0.61,"pressure":1017.16,"windSpeed":9.04,"windGust":18.67,"windBearing":313,"cloudCover":0.99,"uvIndex":0,"visibility":10,"ozone":419.44},{"time":1557169200,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":45.03,"apparentTemperature":40.55,"dewPoint":33.79,"humidity":0.64,"pressure":1017.85,"windSpeed":8.38,"windGust":16.89,"windBearing":307,"cloudCover":0.9,"uvIndex":0,"visibility":10,"ozone":419.04},{"time":1557172800,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":43.26,"apparentTemperature":38.55,"dewPoint":33.64,"humidity":0.69,"pressure":1018.71,"windSpeed":8,"windGust":14.64,"windBearing":303,"cloudCover":0.76,"uvIndex":0,"visibility":10,"ozone":418.98},{"time":1557176400,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":41.59,"apparentTemperature":36.63,"dewPoint":33.33,"humidity":0.72,"pressure":1019.34,"windSpeed":7.8,"windGust":12.97,"windBearing":299,"cloudCover":0.64,"uvIndex":0,"visibility":10,"ozone":419.03},{"time":1557180000,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":40.32,"apparentTemperature":35.19,"dewPoint":32.8,"humidity":0.74,"pressure":1019.61,"windSpeed":7.61,"windGust":12.38,"windBearing":301,"cloudCover":0.53,"uvIndex":0,"visibility":10,"ozone":419.63},{"time":1557183600,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":39.46,"apparentTemperature":34.24,"dewPoint":32.16,"humidity":0.75,"pressure":1019.73,"windSpeed":7.42,"windGust":12.36,"windBearing":292,"cloudCover":0.43,"uvIndex":0,"visibility":10,"ozone":420.44},{"time":1557187200,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":38.69,"apparentTemperature":33.15,"dewPoint":31.57,"humidity":0.75,"pressure":1019.77,"windSpeed":7.72,"windGust":12.29,"windBearing":295,"cloudCover":0.32,"uvIndex":0,"visibility":10,"ozone":419.98},{"time":1557190800,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":37.68,"apparentTemperature":32.01,"dewPoint":31.06,"humidity":0.77,"pressure":1019.92,"windSpeed":7.56,"windGust":11.77,"windBearing":292,"cloudCover":0.2,"uvIndex":0,"visibility":10,"ozone":416.73},{"time":1557194400,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":36.79,"apparentTemperature":31.05,"dewPoint":30.62,"humidity":0.78,"pressure":1020,"windSpeed":7.36,"windGust":11.21,"windBearing":289,"cloudCover":0.08,"uvIndex":0,"visibility":10,"ozone":412.15},{"time":1557198000,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":36.87,"apparentTemperature":31.15,"dewPoint":30.65,"humidity":0.78,"pressure":1020.07,"windSpeed":7.34,"windGust":11.2,"windBearing":287,"cloudCover":0,"uvIndex":0,"visibility":10,"ozone":408.64},{"time":1557201600,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":38.44,"apparentTemperature":32.82,"dewPoint":31.45,"humidity":0.76,"pressure":1020.1,"windSpeed":7.76,"windGust":12.39,"windBearing":288,"cloudCover":0.01,"uvIndex":0,"visibility":10,"ozone":407.25},{"time":1557205200,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":41.15,"apparentTemperature":35.82,"dewPoint":32.79,"humidity":0.72,"pressure":1020.12,"windSpeed":8.35,"windGust":14.14,"windBearing":289,"cloudCover":0.07,"uvIndex":0,"visibility":10,"ozone":406.82},{"time":1557208800,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":43.99,"apparentTemperature":39.14,"dewPoint":33.84,"humidity":0.67,"pressure":1020.05,"windSpeed":8.69,"windGust":15.1,"windBearing":292,"cloudCover":0.1,"uvIndex":1,"visibility":10,"ozone":406.67},{"time":1557212400,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":46.7,"apparentTemperature":42.59,"dewPoint":34.29,"humidity":0.62,"pressure":1019.94,"windSpeed":8.37,"windGust":14.56,"windBearing":294,"cloudCover":0.07,"uvIndex":2,"visibility":10,"ozone":406.54},{"time":1557216000,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":49.53,"apparentTemperature":46.04,"dewPoint":34.44,"humidity":0.56,"pressure":1019.77,"windSpeed":8.4,"windGust":13.22,"windBearing":308,"cloudCover":0.01,"uvIndex":3,"visibility":10,"ozone":406.82},{"time":1557219600,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":51.49,"apparentTemperature":51.49,"dewPoint":34.6,"humidity":0.52,"pressure":1019.44,"windSpeed":8.13,"windGust":11.79,"windBearing":311,"cloudCover":0,"uvIndex":4,"visibility":10,"ozone":406.66},{"time":1557223200,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":53.03,"apparentTemperature":53.03,"dewPoint":34.85,"humidity":0.5,"pressure":1018.96,"windSpeed":6.62,"windGust":10.36,"windBearing":307,"cloudCover":0.07,"uvIndex":5,"visibility":10,"ozone":405.8},{"time":1557226800,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":53.81,"apparentTemperature":53.81,"dewPoint":35.14,"humidity":0.49,"pressure":1018.34,"windSpeed":5.51,"windGust":8.87,"windBearing":265,"cloudCover":0.19,"uvIndex":5,"visibility":10,"ozone":404.62},{"time":1557230400,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":55.2,"apparentTemperature":55.2,"dewPoint":35.41,"humidity":0.47,"pressure":1017.78,"windSpeed":4.94,"windGust":7.63,"windBearing":288,"cloudCover":0.33,"uvIndex":4,"visibility":10,"ozone":403.69},{"time":1557234000,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":56.54,"apparentTemperature":56.54,"dewPoint":35.61,"humidity":0.45,"pressure":1017.37,"windSpeed":4.18,"windGust":6.89,"windBearing":12,"cloudCover":0.51,"uvIndex":3,"visibility":10,"ozone":403.46},{"time":1557237600,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":57.48,"apparentTemperature":57.48,"dewPoint":35.78,"humidity":0.44,"pressure":1017,"windSpeed":4.12,"windGust":6.4,"windBearing":168,"cloudCover":0.7,"uvIndex":2,"visibility":10,"ozone":403.39},{"time":1557241200,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":57.5,"apparentTemperature":57.5,"dewPoint":36.15,"humidity":0.45,"pressure":1016.76,"windSpeed":4.09,"windGust":5.87,"windBearing":242,"cloudCover":0.84,"uvIndex":1,"visibility":10,"ozone":402.82},{"time":1557244800,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":56.73,"apparentTemperature":56.73,"dewPoint":37.04,"humidity":0.48,"pressure":1016.69,"windSpeed":3.55,"windGust":5.11,"windBearing":241,"cloudCover":0.88,"uvIndex":1,"visibility":10,"ozone":401.43},{"time":1557248400,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":54.28,"apparentTemperature":54.28,"dewPoint":38.12,"humidity":0.54,"pressure":1016.78,"windSpeed":2.95,"windGust":4.3,"windBearing":207,"cloudCover":0.88,"uvIndex":0,"visibility":10,"ozone":399.65},{"time":1557252000,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":51.81,"apparentTemperature":51.81,"dewPoint":38.49,"humidity":0.6,"pressure":1016.94,"windSpeed":2.73,"windGust":3.75,"windBearing":180,"cloudCover":0.87,"uvIndex":0,"visibility":10,"ozone":397.78},{"time":1557255600,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":49.22,"apparentTemperature":49.22,"dewPoint":37.55,"humidity":0.64,"pressure":1017.29,"windSpeed":2.74,"windGust":3.71,"windBearing":167,"cloudCover":0.89,"uvIndex":0,"visibility":10,"ozone":395.78},{"time":1557259200,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":46.85,"apparentTemperature":46.07,"dewPoint":35.9,"humidity":0.65,"pressure":1017.74,"windSpeed":3.04,"windGust":3.94,"windBearing":158,"cloudCover":0.91,"uvIndex":0,"visibility":10,"ozone":393.84},{"time":1557262800,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":44.63,"apparentTemperature":43.25,"dewPoint":34.6,"humidity":0.68,"pressure":1018.03,"windSpeed":3.35,"windGust":3.98,"windBearing":154,"cloudCover":0.89,"uvIndex":0,"visibility":10,"ozone":392.05},{"time":1557266400,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":43.01,"apparentTemperature":41.4,"dewPoint":34.08,"humidity":0.71,"pressure":1018,"windSpeed":3.35,"windGust":3.6,"windBearing":153,"cloudCover":0.8,"uvIndex":0,"visibility":10,"ozone":390.63},{"time":1557270000,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":41.83,"apparentTemperature":40.14,"dewPoint":33.9,"humidity":0.73,"pressure":1017.8,"windSpeed":3.26,"windGust":3.35,"windBearing":152,"cloudCover":0.66,"uvIndex":0,"visibility":10,"ozone":389.46},{"time":1557273600,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":40.75,"apparentTemperature":39.15,"dewPoint":33.7,"humidity":0.76,"pressure":1017.55,"windSpeed":3.06,"windGust":3.11,"windBearing":149,"cloudCover":0.55,"uvIndex":0,"visibility":10,"ozone":388.66},{"time":1557277200,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":39.2,"apparentTemperature":39.2,"dewPoint":33.06,"humidity":0.78,"pressure":1017.3,"windSpeed":2.55,"windGust":2.65,"windBearing":138,"cloudCover":0.49,"uvIndex":0,"visibility":10,"ozone":388.63},{"time":1557280800,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":37.62,"apparentTemperature":37.62,"dewPoint":32.41,"humidity":0.81,"pressure":1016.98,"windSpeed":1.85,"windGust":2.07,"windBearing":107,"cloudCover":0.45,"uvIndex":0,"visibility":10,"ozone":389.04},{"time":1557284400,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":37.01,"apparentTemperature":37.01,"dewPoint":32.38,"humidity":0.83,"pressure":1016.62,"windSpeed":1.6,"windGust":1.87,"windBearing":88,"cloudCover":0.41,"uvIndex":0,"visibility":10,"ozone":388.94},{"time":1557288000,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":38.92,"apparentTemperature":38.92,"dewPoint":33.33,"humidity":0.8,"pressure":1016.21,"windSpeed":1.92,"windGust":2.23,"windBearing":102,"cloudCover":0.33,"uvIndex":0,"visibility":10,"ozone":387.92},{"time":1557291600,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":42.44,"apparentTemperature":42.44,"dewPoint":34.92,"humidity":0.74,"pressure":1015.76,"windSpeed":2.88,"windGust":3.18,"windBearing":91,"cloudCover":0.26,"uvIndex":0,"visibility":10,"ozone":386.38},{"time":1557295200,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":46.22,"apparentTemperature":44.65,"dewPoint":36.76,"humidity":0.69,"pressure":1015.24,"windSpeed":3.82,"windGust":4.77,"windBearing":86,"cloudCover":0.22,"uvIndex":1,"visibility":10,"ozone":385.01},{"time":1557298800,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":49.85,"apparentTemperature":48.28,"dewPoint":39,"humidity":0.66,"pressure":1014.61,"windSpeed":4.61,"windGust":6.94,"windBearing":91,"cloudCover":0.24,"uvIndex":2,"visibility":10,"ozone":384.21},{"time":1557302400,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":53.53,"apparentTemperature":53.53,"dewPoint":41.5,"humidity":0.64,"pressure":1013.91,"windSpeed":5.45,"windGust":9.49,"windBearing":104,"cloudCover":0.3,"uvIndex":3,"visibility":10,"ozone":383.52},{"time":1557306000,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":56.78,"apparentTemperature":56.78,"dewPoint":43.52,"humidity":0.61,"pressure":1013.08,"windSpeed":6.47,"windGust":11.7,"windBearing":113,"cloudCover":0.36,"uvIndex":4,"visibility":10,"ozone":382.6},{"time":1557309600,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":59.87,"apparentTemperature":59.87,"dewPoint":44.69,"humidity":0.57,"pressure":1012.07,"windSpeed":7.98,"windGust":13.11,"windBearing":118,"cloudCover":0.4,"uvIndex":5,"visibility":10,"ozone":381.09},{"time":1557313200,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":62.42,"apparentTemperature":62.42,"dewPoint":45.35,"humidity":0.54,"pressure":1010.97,"windSpeed":9.74,"windGust":14.16,"windBearing":120,"cloudCover":0.45,"uvIndex":5,"visibility":10,"ozone":379.3},{"time":1557316800,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":65.32,"apparentTemperature":65.32,"dewPoint":45.79,"humidity":0.49,"pressure":1009.86,"windSpeed":11.28,"windGust":15.68,"windBearing":123,"cloudCover":0.47,"uvIndex":4,"visibility":10,"ozone":377.6},{"time":1557320400,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":67.1,"apparentTemperature":67.1,"dewPoint":46.03,"humidity":0.47,"pressure":1008.75,"windSpeed":12.62,"windGust":18.23,"windBearing":130,"cloudCover":0.45,"uvIndex":4,"visibility":10,"ozone":375.97},{"time":1557324000,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":67.81,"apparentTemperature":67.81,"dewPoint":46.03,"humidity":0.46,"pressure":1007.65,"windSpeed":13.72,"windGust":21.2,"windBearing":139,"cloudCover":0.42,"uvIndex":3,"visibility":10,"ozone":374.43},{"time":1557327600,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":67.03,"apparentTemperature":67.03,"dewPoint":45.96,"humidity":0.47,"pressure":1006.74,"windSpeed":14.2,"windGust":23.83,"windBearing":142,"cloudCover":0.42,"uvIndex":2,"visibility":10,"ozone":373.25},{"time":1557331200,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":65.53,"apparentTemperature":65.53,"dewPoint":45.95,"humidity":0.49,"pressure":1006.09,"windSpeed":13.73,"windGust":26.56,"windBearing":142,"cloudCover":0.48,"uvIndex":1,"visibility":10,"ozone":372.75},{"time":1557334800,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":62.52,"apparentTemperature":62.52,"dewPoint":45.86,"humidity":0.54,"pressure":1005.62,"windSpeed":12.6,"windGust":28.92,"windBearing":137,"cloudCover":0.58,"uvIndex":0,"visibility":10,"ozone":372.49}]},"daily":{"summary":"Light rain today through Sunday, with high temperatures rising to 68°F on Saturday.","icon":"rain","data":[{"time":1557093600,"summary":"Foggy in the morning.","icon":"fog","sunriseTime":1557113484,"sunsetTime":1557166742,"moonPhase":0.05,"precipIntensity":0.0036,"precipIntensityMax":0.0136,"precipIntensityMaxTime":1557108000,"precipProbability":0.72,"precipType":"rain","temperatureHigh":51.21,"temperatureHighTime":1557147600,"temperatureLow":36.79,"temperatureLowTime":1557194400,"apparentTemperatureHigh":51.21,"apparentTemperatureHighTime":1557147600,"apparentTemperatureLow":31.05,"apparentTemperatureLowTime":1557194400,"dewPoint":33.95,"humidity":0.68,"pressure":1016.36,"windSpeed":10.95,"windGust":22.97,"windGustTime":1557111600,"windBearing":327,"cloudCover":0.91,"uvIndex":3,"uvIndexTime":1557133200,"visibility":7.64,"ozone":417.22,"temperatureMin":38.93,"temperatureMinTime":1557115200,"temperatureMax":51.21,"temperatureMaxTime":1557147600,"apparentTemperatureMin":31.87,"apparentTemperatureMinTime":1557118800,"apparentTemperatureMax":51.21,"apparentTemperatureMaxTime":1557147600},{"time":1557180000,"summary":"Mostly cloudy starting in the afternoon.","icon":"partly-cloudy-night","sunriseTime":1557199792,"sunsetTime":1557253228,"moonPhase":0.08,"precipIntensity":0,"precipIntensityMax":0.0002,"precipIntensityMaxTime":1557208800,"precipProbability":0,"temperatureHigh":57.5,"temperatureHighTime":1557241200,"temperatureLow":37.01,"temperatureLowTime":1557284400,"apparentTemperatureHigh":57.5,"apparentTemperatureHighTime":1557241200,"apparentTemperatureLow":37.01,"apparentTemperatureLowTime":1557284400,"dewPoint":34.37,"humidity":0.62,"pressure":1018.67,"windSpeed":4.47,"windGust":15.1,"windGustTime":1557208800,"windBearing":285,"cloudCover":0.41,"uvIndex":5,"uvIndexTime":1557223200,"visibility":10,"ozone":405.94,"temperatureMin":36.79,"temperatureMinTime":1557194400,"temperatureMax":57.5,"temperatureMaxTime":1557241200,"apparentTemperatureMin":31.05,"apparentTemperatureMinTime":1557194400,"apparentTemperatureMax":57.5,"apparentTemperatureMaxTime":1557241200},{"time":1557266400,"summary":"Partly cloudy throughout the day.","icon":"partly-cloudy-day","sunriseTime":1557286101,"sunsetTime":1557339713,"moonPhase":0.12,"precipIntensity":0,"precipIntensityMax":0.0002,"precipIntensityMaxTime":1557338400,"precipProbability":0,"temperatureHigh":67.81,"temperatureHighTime":1557324000,"temperatureLow":47.18,"temperatureLowTime":1557370800,"apparentTemperatureHigh":67.81,"apparentTemperatureHighTime":1557324000,"apparentTemperatureLow":44.31,"apparentTemperatureLowTime":1557374400,"dewPoint":40.39,"humidity":0.64,"pressure":1011.73,"windSpeed":6.95,"windGust":28.92,"windGustTime":1557334800,"windBearing":129,"cloudCover":0.5,"uvIndex":5,"uvIndexTime":1557309600,"visibility":10,"ozone":380.34,"temperatureMin":37.01,"temperatureMinTime":1557284400,"temperatureMax":67.81,"temperatureMaxTime":1557324000,"apparentTemperatureMin":37.01,"apparentTemperatureMinTime":1557284400,"apparentTemperatureMax":67.81,"apparentTemperatureMaxTime":1557324000},{"time":1557352800,"summary":"Light rain in the morning.","icon":"rain","sunriseTime":1557372412,"sunsetTime":1557426197,"moonPhase":0.15,"precipIntensity":0.0114,"precipIntensityMax":0.0374,"precipIntensityMaxTime":1557381600,"precipProbability":0.96,"precipType":"rain","temperatureHigh":60.39,"temperatureHighTime":1557414000,"temperatureLow":46.83,"temperatureLowTime":1557457200,"apparentTemperatureHigh":60.39,"apparentTemperatureHighTime":1557414000,"apparentTemperatureLow":42.03,"apparentTemperatureLowTime":1557457200,"dewPoint":45.23,"humidity":0.75,"pressure":1004.71,"windSpeed":6.03,"windGust":24.92,"windGustTime":1557374400,"windBearing":269,"cloudCover":0.92,"uvIndex":3,"uvIndexTime":1557392400,"visibility":5.45,"ozone":383.12,"temperatureMin":47.18,"temperatureMinTime":1557370800,"temperatureMax":60.39,"temperatureMaxTime":1557414000,"apparentTemperatureMin":44.31,"apparentTemperatureMinTime":1557374400,"apparentTemperatureMax":60.39,"apparentTemperatureMaxTime":1557414000},{"time":1557439200,"summary":"Mostly cloudy throughout the day.","icon":"partly-cloudy-day","sunriseTime":1557458725,"sunsetTime":1557512681,"moonPhase":0.19,"precipIntensity":0.0006,"precipIntensityMax":0.0028,"precipIntensityMaxTime":1557511200,"precipProbability":0.2,"precipType":"rain","temperatureHigh":67.72,"temperatureHighTime":1557496800,"temperatureLow":47.17,"temperatureLowTime":1557543600,"apparentTemperatureHigh":67.72,"apparentTemperatureHighTime":1557496800,"apparentTemperatureLow":46.62,"apparentTemperatureLowTime":1557540000,"dewPoint":44.27,"humidity":0.67,"pressure":1011.03,"windSpeed":7.58,"windGust":26.12,"windGustTime":1557446400,"windBearing":267,"cloudCover":0.57,"uvIndex":4,"uvIndexTime":1557482400,"visibility":10,"ozone":373.74,"temperatureMin":46.83,"temperatureMinTime":1557457200,"temperatureMax":67.72,"temperatureMaxTime":1557496800,"apparentTemperatureMin":42.03,"apparentTemperatureMinTime":1557457200,"apparentTemperatureMax":67.72,"apparentTemperatureMaxTime":1557496800},{"time":1557525600,"summary":"Rain starting in the evening.","icon":"rain","sunriseTime":1557545040,"sunsetTime":1557599165,"moonPhase":0.23,"precipIntensity":0.0137,"precipIntensityMax":0.063,"precipIntensityMaxTime":1557608400,"precipProbability":0.81,"precipType":"rain","temperatureHigh":68.26,"temperatureHighTime":1557583200,"temperatureLow":45.97,"temperatureLowTime":1557640800,"apparentTemperatureHigh":68.26,"apparentTemperatureHighTime":1557583200,"apparentTemperatureLow":39.3,"apparentTemperatureLowTime":1557640800,"dewPoint":47.56,"humidity":0.72,"pressure":1012.49,"windSpeed":1.59,"windGust":37.24,"windGustTime":1557608400,"windBearing":42,"cloudCover":0.97,"uvIndex":4,"uvIndexTime":1557568800,"visibility":8.19,"ozone":351.95,"temperatureMin":47.17,"temperatureMinTime":1557543600,"temperatureMax":68.26,"temperatureMaxTime":1557583200,"apparentTemperatureMin":46.62,"apparentTemperatureMinTime":1557540000,"apparentTemperatureMax":68.26,"apparentTemperatureMaxTime":1557583200},{"time":1557612000,"summary":"Overcast throughout the day and breezy until evening.","icon":"wind","sunriseTime":1557631356,"sunsetTime":1557685648,"moonPhase":0.27,"precipIntensity":0.0043,"precipIntensityMax":0.0388,"precipIntensityMaxTime":1557612000,"precipProbability":0.91,"precipType":"rain","temperatureHigh":54.1,"temperatureHighTime":1557669600,"temperatureLow":44.39,"temperatureLowTime":1557716400,"apparentTemperatureHigh":54.1,"apparentTemperatureHighTime":1557669600,"apparentTemperatureLow":37.78,"apparentTemperatureLowTime":1557716400,"dewPoint":39.06,"humidity":0.69,"pressure":1021.41,"windSpeed":13.63,"windGust":39.17,"windGustTime":1557612000,"windBearing":318,"cloudCover":1,"uvIndex":4,"uvIndexTime":1557658800,"visibility":5.14,"ozone":356.81,"temperatureMin":45.97,"temperatureMinTime":1557640800,"temperatureMax":54.1,"temperatureMaxTime":1557669600,"apparentTemperatureMin":39.3,"apparentTemperatureMinTime":1557640800,"apparentTemperatureMax":54.1,"apparentTemperatureMaxTime":1557669600},{"time":1557698400,"summary":"Mostly cloudy until afternoon and breezy in the afternoon.","icon":"wind","sunriseTime":1557717674,"sunsetTime":1557772130,"moonPhase":0.3,"precipIntensity":0.0001,"precipIntensityMax":0.0016,"precipIntensityMaxTime":1557698400,"precipProbability":0.14,"precipType":"rain","temperatureHigh":58.92,"temperatureHighTime":1557756000,"temperatureLow":45.12,"temperatureLowTime":1557799200,"apparentTemperatureHigh":58.92,"apparentTemperatureHighTime":1557756000,"apparentTemperatureLow":39.71,"apparentTemperatureLowTime":1557799200,"dewPoint":37.2,"humidity":0.61,"pressure":1027.67,"windSpeed":13.5,"windGust":27.06,"windGustTime":1557698400,"windBearing":329,"cloudCover":0.61,"uvIndex":5,"uvIndexTime":1557748800,"visibility":9.52,"ozone":347.4,"temperatureMin":44.39,"temperatureMinTime":1557716400,"temperatureMax":58.92,"temperatureMaxTime":1557756000,"apparentTemperatureMin":37.78,"apparentTemperatureMinTime":1557716400,"apparentTemperatureMax":58.92,"apparentTemperatureMaxTime":1557756000}]},"flags":{"sources":["meteoalarm","cmc","gfs","icon","isd","madis"],"meteoalarm-license":"Based on data from EUMETNET - MeteoAlarm [https://www.meteoalarm.eu/]. Time delays between this website and the MeteoAlarm website are possible; for the most up to date information about alert levels as published by the participating National Meteorological Services please use the MeteoAlarm website.","nearest-station":1.394,"units":"us"},"offset":2});
}

export function darkskyTimeMachine(f, location, time, unit) {
  f({"latitude":48.477231,"longitude":15.673781,"timezone":"Europe/Vienna","currently":{"time":1557698400,"summary":"Overcast","icon":"cloudy","precipIntensity":0.1118,"precipProbability":0.19,"precipType":"rain","temperature":8.01,"apparentTemperature":5.08,"dewPoint":5.37,"humidity":0.83,"pressure":1029.1,"windSpeed":18.14,"windGust":34.52,"windBearing":335,"cloudCover":1,"uvIndex":0,"visibility":8.51,"ozone":365.21},"hourly":{"summary":"Overcast throughout the day.","icon":"cloudy","data":[{"time":1557698400,"summary":"Overcast","icon":"cloudy","precipIntensity":0.1118,"precipProbability":0.19,"precipType":"rain","temperature":8.01,"apparentTemperature":5.08,"dewPoint":5.37,"humidity":0.83,"pressure":1029.1,"windSpeed":18.14,"windGust":34.52,"windBearing":335,"cloudCover":1,"uvIndex":0,"visibility":8.51,"ozone":365.21},{"time":1557702000,"summary":"Overcast","icon":"cloudy","precipIntensity":0.1092,"precipProbability":0.18,"precipType":"rain","temperature":7.86,"apparentTemperature":4.96,"dewPoint":5.28,"humidity":0.84,"pressure":1029.31,"windSpeed":17.57,"windGust":34.65,"windBearing":335,"cloudCover":1,"uvIndex":0,"visibility":7.76,"ozone":365.42},{"time":1557705600,"summary":"Overcast","icon":"cloudy","precipIntensity":0.1118,"precipProbability":0.16,"precipType":"rain","temperature":8.36,"apparentTemperature":6.06,"dewPoint":5.32,"humidity":0.81,"pressure":1029.58,"windSpeed":13.89,"windGust":34.97,"windBearing":315,"cloudCover":0.98,"uvIndex":0,"visibility":7.95,"ozone":365.24},{"time":1557709200,"summary":"Overcast","icon":"cloudy","precipIntensity":0.1016,"precipProbability":0.13,"precipType":"rain","temperature":8.23,"apparentTemperature":6.06,"dewPoint":5.33,"humidity":0.82,"pressure":1029.85,"windSpeed":12.81,"windGust":29,"windBearing":319,"cloudCover":0.99,"uvIndex":0,"visibility":11.84,"ozone":367.04},{"time":1557712800,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0762,"precipProbability":0.11,"precipType":"rain","temperature":7.96,"apparentTemperature":5.73,"dewPoint":5.23,"humidity":0.83,"pressure":1030.04,"windSpeed":12.79,"windGust":32.62,"windBearing":328,"cloudCover":1,"uvIndex":0,"visibility":12.41,"ozone":366.11},{"time":1557716400,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0483,"precipProbability":0.08,"precipType":"rain","temperature":7.78,"apparentTemperature":5.43,"dewPoint":5.15,"humidity":0.83,"pressure":1030.21,"windSpeed":13.31,"windGust":35.37,"windBearing":334,"cloudCover":1,"uvIndex":0,"visibility":13.26,"ozone":365.52},{"time":1557720000,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0254,"precipProbability":0.06,"precipType":"rain","temperature":7.6,"apparentTemperature":5.11,"dewPoint":5.17,"humidity":0.85,"pressure":1030.37,"windSpeed":14.03,"windGust":36.18,"windBearing":337,"cloudCover":0.99,"uvIndex":0,"visibility":14.68,"ozone":365.66},{"time":1557723600,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0254,"precipProbability":0.07,"precipType":"rain","temperature":7.6,"apparentTemperature":4.91,"dewPoint":5.23,"humidity":0.85,"pressure":1030.62,"windSpeed":15.45,"windGust":36.08,"windBearing":338,"cloudCover":0.99,"uvIndex":0,"visibility":16.09,"ozone":366.1},{"time":1557727200,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0203,"precipProbability":0.07,"precipType":"rain","temperature":7.94,"apparentTemperature":5.12,"dewPoint":5.03,"humidity":0.82,"pressure":1031.07,"windSpeed":17.04,"windGust":33.81,"windBearing":337,"cloudCover":0.99,"uvIndex":1,"visibility":16.09,"ozone":362.43},{"time":1557730800,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":8.08,"apparentTemperature":5.19,"dewPoint":4.47,"humidity":0.78,"pressure":1031.08,"windSpeed":17.96,"windGust":33.73,"windBearing":346,"cloudCover":1,"uvIndex":2,"visibility":16.09,"ozone":362.44},{"time":1557734400,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":8.87,"apparentTemperature":6.01,"dewPoint":3.71,"humidity":0.7,"pressure":1031.19,"windSpeed":19.59,"windGust":33.75,"windBearing":349,"cloudCover":1,"uvIndex":3,"visibility":16.09,"ozone":362.93},{"time":1557738000,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":9.87,"apparentTemperature":7.14,"dewPoint":3.16,"humidity":0.63,"pressure":1031.19,"windSpeed":20.95,"windGust":33.76,"windBearing":352,"cloudCover":1,"uvIndex":3,"visibility":16.09,"ozone":363.53},{"time":1557741600,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":10.97,"apparentTemperature":10.97,"dewPoint":3.09,"humidity":0.58,"pressure":1031.02,"windSpeed":21.97,"windGust":33.72,"windBearing":355,"cloudCover":0.97,"uvIndex":3,"visibility":16.09,"ozone":364.05},{"time":1557745200,"summary":"Overcast","icon":"cloudy","precipIntensity":0,"precipProbability":0,"temperature":11.75,"apparentTemperature":11.75,"dewPoint":3.28,"humidity":0.56,"pressure":1030.72,"windSpeed":22.66,"windGust":33.62,"windBearing":358,"cloudCover":0.94,"uvIndex":4,"visibility":16.09,"ozone":364.74},{"time":1557748800,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0,"precipProbability":0,"temperature":11.41,"apparentTemperature":11.41,"dewPoint":3.49,"humidity":0.58,"pressure":1030.45,"windSpeed":22.72,"windGust":33.23,"windBearing":0,"cloudCover":0.91,"uvIndex":4,"visibility":16.09,"ozone":365.37},{"time":1557752400,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0102,"precipProbability":0.04,"precipType":"rain","temperature":13.64,"apparentTemperature":13.64,"dewPoint":2.96,"humidity":0.48,"pressure":1030.16,"windSpeed":19.33,"windGust":32.88,"windBearing":3,"cloudCover":0.9,"uvIndex":3,"visibility":16.09,"ozone":365.99},{"time":1557756000,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0254,"precipProbability":0.05,"precipType":"rain","temperature":12.66,"apparentTemperature":12.66,"dewPoint":3.64,"humidity":0.54,"pressure":1030.11,"windSpeed":18.56,"windGust":32.19,"windBearing":6,"cloudCover":0.89,"uvIndex":3,"visibility":16.09,"ozone":366.63},{"time":1557759600,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0432,"precipProbability":0.06,"precipType":"rain","temperature":11.92,"apparentTemperature":11.92,"dewPoint":4.24,"humidity":0.59,"pressure":1030.36,"windSpeed":16.96,"windGust":29.35,"windBearing":7,"cloudCover":0.87,"uvIndex":2,"visibility":16.09,"ozone":356.7},{"time":1557763200,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0787,"precipProbability":0.12,"precipType":"rain","temperature":10.87,"apparentTemperature":10.87,"dewPoint":4.62,"humidity":0.65,"pressure":1030.2,"windSpeed":14.16,"windGust":23.67,"windBearing":10,"cloudCover":0.9,"uvIndex":1,"visibility":16.09,"ozone":368.23},{"time":1557766800,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.1346,"precipProbability":0.17,"precipType":"rain","temperature":9.71,"apparentTemperature":8.19,"dewPoint":4.84,"humidity":0.72,"pressure":1030.26,"windSpeed":10.61,"windGust":15.82,"windBearing":12,"cloudCover":0.92,"uvIndex":0,"visibility":16.09,"ozone":369.23},{"time":1557770400,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.1422,"precipProbability":0.16,"precipType":"rain","temperature":8.91,"apparentTemperature":7.72,"dewPoint":5.01,"humidity":0.77,"pressure":1030.47,"windSpeed":8.08,"windGust":12.96,"windBearing":18,"cloudCover":0.88,"uvIndex":0,"visibility":16.09,"ozone":360.28},{"time":1557774000,"summary":"Overcast","icon":"cloudy","precipIntensity":0.1067,"precipProbability":0.1,"precipType":"rain","temperature":8.16,"apparentTemperature":7.17,"dewPoint":5.03,"humidity":0.81,"pressure":1030.65,"windSpeed":6.74,"windGust":12.71,"windBearing":4,"cloudCover":0.97,"uvIndex":0,"visibility":16.09,"ozone":376.37},{"time":1557777600,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0483,"precipProbability":0.06,"precipType":"rain","temperature":7.7,"apparentTemperature":6.86,"dewPoint":5.02,"humidity":0.83,"pressure":1030.93,"windSpeed":5.95,"windGust":17.33,"windBearing":353,"cloudCover":1,"uvIndex":0,"visibility":16.09,"ozone":382.48},{"time":1557781200,"summary":"Overcast","icon":"cloudy","precipIntensity":0.0279,"precipProbability":0.05,"precipType":"rain","temperature":7.22,"apparentTemperature":6.42,"dewPoint":4.69,"humidity":0.84,"pressure":1031.09,"windSpeed":5.55,"windGust":12.97,"windBearing":347,"cloudCover":1,"uvIndex":0,"visibility":16.09,"ozone":376.12}]},"daily":{"data":[{"time":1557698400,"summary":"Mostly cloudy throughout the day.","icon":"partly-cloudy-day","sunriseTime":1557717674,"sunsetTime":1557772130,"moonPhase":0.3,"precipIntensity":0.0533,"precipIntensityMax":0.1422,"precipIntensityMaxTime":1557770400,"precipProbability":0.66,"precipType":"rain","temperatureHigh":13.64,"temperatureHighTime":1557752400,"temperatureLow":3.52,"temperatureLowTime":1557802800,"apparentTemperatureHigh":13.64,"apparentTemperatureHighTime":1557752400,"apparentTemperatureLow":0.27,"apparentTemperatureLowTime":1557802800,"dewPoint":4.52,"humidity":0.73,"pressure":1030.42,"windSpeed":14.73,"windGust":36.18,"windGustTime":1557720000,"windBearing":349,"cloudCover":0.96,"uvIndex":4,"uvIndexTime":1557745200,"visibility":14.58,"ozone":366.41,"temperatureMin":7.22,"temperatureMinTime":1557781200,"temperatureMax":13.64,"temperatureMaxTime":1557752400,"apparentTemperatureMin":4.91,"apparentTemperatureMinTime":1557723600,"apparentTemperatureMax":13.64,"apparentTemperatureMaxTime":1557752400}]},"flags":{"sources":["cmc","gfs","icon","isd","madis"],"nearest-station":2.243,"units":"ca"},"offset":2});
}
