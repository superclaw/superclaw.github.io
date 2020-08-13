const VEHICLES = {
  "pageIndex": 0,
  "init": {
    "header": "тип транспортного средства",
    "input": {
      "automobile": "Автомобиль",
      "airplane": "Самолёт",
      "ship": "Судно"
    }
  },

  "automobile": {
    "pageIndex": 1,
    "init": {
      "header": "вид автомобиля",
      "input": {
        "car": "Легковая",
        "truck": "Грузовик",
        "bus": "Автобус"
      }
    },

    "car": {
      "pageIndex": 2,
      "init": {
        "header": "марку автомобиля",
        "input": {
          "toyota": "Toyota",
          "kia": "Kia",
          "lada": "Lada",
          "hyundai": "Hyundai"
        }
      },

      "toyota": {
        "pageIndex": 3,
        "init": {
          "header": "модель",
          "input": [
            "Camry",
            "Corolla",
            "Caldina"
          ]
        }
      },

      "kia": {
        "pageIndex": 3,
        "init": {
          "header": "модель",
          "input": [
            "Rio",
            "Cerato"
          ]
        }
      },

      "lada": {
        "pageIndex": 3,
        "init": {
          "header": "модель",
          "input": [
            "Granta",
            "Vesta"
          ]
        }
      },

      "hyundai": {
        "pageIndex": 3,
        "init": {
          "header": "модель",
          "input": [
            "Solaris",
            "Sonata",
            "Santa Fe"
          ]
        }
      }
    },

    "truck": {
      "pageIndex": 2,
      "init": {
        "header": "марку грузовика",
        "input": {
          "hyundai": "Hyundai",
          "mercedes": "Mercedes-Benz",
          "kamaz": "КамАЗ"
        }
      },

      "hyundai": {
        "pageIndex": 3,
        "init": {
          "heaader": "модель",
          "input": [
            "HD 170",
            "HD 65 Duble Cub"
          ]
        }
      },

      "mercedes": {
        "pageIndex": 3,
        "init": {
          "header": "модель",
          "input": [
            "Atego 818 8t",
            "Actros 2545 L BDF StreamSpace"
          ]
        }
      },

      "kamaz": {
        "pageIndex": 3,
        "init": {
          "header": "модель",
          "input": [
            "6520",
            "689011"
          ]
        }
      }
    },

    "bus": {
      "pageIndex": 2,
      "init": {
        "header": "марку автобуса",
        "input": {
          "mercedes": "Mercedes",
          "paz": "ПАЗ",
          "higer": "Higer"
        }
      },

      "mercedes": {
        "pageIndex": 3,
        "init": {
          "header": "модель",
          "input": [
            "Sprinter Classic",
            "Tourismo"
          ]
        }
      },

      "paz": {
        "pageIndex": 3,
        "init": {
          "header": "модель",
          "input": [
            "Аврора",
            "3204",
            "672"
          ]
        }
      },

      "higer": {
        "pageIndex": 3,
        "init": {
          "header": "модель",
          "input": [
            "KLQ6119TQ",
            "KLQ6928Q"
          ]
        }
      }
    }
  },

  "airplane": {
    "pageIndex": 1,
    "init": {
      "header": "вид самолёта",
      "input": {
        "airliner": "Пассажирский",
        "cargoPlane": "Грузовой"
      }
    },

    "airliner": {
      "pageIndex": 2,
      "init": {
        "header": "марку пассажирского самолёта",
        "input": {
          "airbus": "Airbus",
          "boeing": "Boeing"
        }
      },

      "airbus": {
        "pageIndex": 3,
        "init": {
          "header": "модель",
          "input": [
            "A319",
            "A330",
            "A380"
          ]
        }
      },

      "boeing": {
        "pageIndex": 3,
        "init": {
          "header": "модель",
          "input": [
            "737",
            "767"
          ]
        }
      }
    },

    "cargoPlane": {
      "pageIndex": 2,
      "init": {
        "header": "марку грузового самолёта",
        "inputn": {
          "airbus": "Airbus",
          "boeing": "Boeing"
        }
      },

      "airbus": {
        "pageIndex": 3,
        "init": {
          "header": "модель",
          "input": [
            "A319-100", "A321-100"
          ]
        }
      },

      "boeing": {
        "pageIndex": 3,
        "init": {
          "header": "модель",
          "input": [
            "737-300",
            "767-300"
          ]
        }
      }
    }
  },

  "ship": {
    "pageIndex": 1,
    "init": {
      "header": "вид судна",
      "input": {
        "liner": "Пассажирское",
        "cargoShip": "Грузовое"
      }
    },

    "liner": {
      "pageIndex": 3,
      "init": {
        "header": "класс лайнера",
        "input": [
          "Sovereign",
          "Fantasy",
          "Vista"
        ]
      }
    },

    "cargoShip": {
      "pageIndex": 3,
      "init": {
        "header": "класс судна",
        "input": [
          "Handysize",
          "Feeder",
          "Panamax"
        ]
      }
    }
  }
}