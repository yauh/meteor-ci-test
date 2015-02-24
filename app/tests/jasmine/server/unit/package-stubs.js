// DEPENDS ON GLOBAL OBJECT: 'ComponentMocker'

var packageMetadata = {
  "reload": {},
  "json": {},
  "base64": {
    "Base64": {
      "type": "object",
      "members": {
        "encode": {
          "type": "function"
        },
        "newBinary": {
          "type": "function"
        },
        "decode": {
          "type": "function"
        }
      }
    }
  },
  "ejson": {
    "EJSON": {
      "type": "object",
      "members": {
        "addType": {
          "type": "function"
        },
        "toJSONValue": {
          "type": "function"
        },
        "fromJSONValue": {
          "type": "function"
        },
        "stringify": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "isBinary": {
          "type": "function"
        },
        "equals": {
          "type": "function"
        },
        "clone": {
          "type": "function"
        },
        "newBinary": {
          "type": "function"
        }
      }
    },
    "EJSONTest": {
      "type": "object"
    }
  },
  "logging": {
    "Log": {
      "type": "function",
      "members": {
        "outputFormat": {
          "type": "constant",
          "value": "json"
        },
        "debug": {
          "type": "function"
        },
        "info": {
          "type": "function"
        },
        "warn": {
          "type": "function"
        },
        "error": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "format": {
          "type": "function"
        },
        "objFromText": {
          "type": "function"
        }
      }
    }
  },
  "routepolicy": {
    "RoutePolicy": {
      "type": "object",
      "members": {
        "urlPrefixTypes": {
          "type": "object",
          "members": {
            "/sockjs/": {
              "type": "constant",
              "value": "network"
            }
          }
        },
        "urlPrefixMatches": {
          "type": "function"
        },
        "checkType": {
          "type": "function"
        },
        "checkUrlPrefix": {
          "type": "function"
        },
        "checkForConflictWithStatic": {
          "type": "function"
        },
        "declare": {
          "type": "function"
        },
        "isValidUrl": {
          "type": "function"
        },
        "classify": {
          "type": "function"
        },
        "urlPrefixesFor": {
          "type": "function"
        }
      }
    },
    "RoutePolicyTest": {
      "type": "object",
      "members": {
        "Constructor": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "urlPrefixMatches": {
                  "type": "function"
                },
                "checkType": {
                  "type": "function"
                },
                "checkUrlPrefix": {
                  "type": "function"
                },
                "checkForConflictWithStatic": {
                  "type": "function"
                },
                "declare": {
                  "type": "function"
                },
                "isValidUrl": {
                  "type": "function"
                },
                "classify": {
                  "type": "function"
                },
                "urlPrefixesFor": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "tracker": {
    "Tracker": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    },
    "Deps": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    }
  },
  "deps": {
    "Tracker": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    },
    "Deps": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    }
  },
  "htmljs": {
    "HTML": {
      "type": "object",
      "members": {
        "Visitor": {
          "type": "function",
          "members": {
            "def": {
              "type": "function",
              "refID": 2
            },
            "extend": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "visit": {
                  "type": "function",
                  "refID": 7
                },
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "visitFunction": {
                  "type": "function",
                  "refID": 25
                }
              }
            }
          }
        },
        "TransformingVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function",
                  "refID": 29
                },
                "visitPrimitive": {
                  "ref": 29
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "ref": 29
                },
                "visitCharRef": {
                  "ref": 29
                },
                "visitRaw": {
                  "ref": 29
                },
                "visitObject": {
                  "ref": 29
                },
                "visitFunction": {
                  "ref": 29
                },
                "visitTag": {
                  "type": "function"
                },
                "visitChildren": {
                  "type": "function"
                },
                "visitAttributes": {
                  "type": "function"
                },
                "visitAttribute": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                }
              }
            }
          }
        },
        "ToTextVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "toHTML": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                },
                "visitFunction": {
                  "ref": 25
                }
              }
            }
          }
        },
        "ToHTMLVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "toText": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                },
                "visitFunction": {
                  "ref": 25
                }
              }
            }
          }
        },
        "Tag": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 82
            },
            "prototype": {
              "type": "object",
              "members": {
                "tagName": {
                  "type": "constant",
                  "value": ""
                },
                "attrs": {
                  "type": "null",
                  "value": null
                },
                "children": {
                  "type": "array",
                  "refID": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "Attrs": {
          "type": "function"
        },
        "getTag": {
          "type": "function"
        },
        "ensureTag": {
          "type": "function"
        },
        "isTagEnsured": {
          "type": "function"
        },
        "getSymbolName": {
          "type": "function"
        },
        "knownElementNames": {
          "type": "array"
        },
        "knownSVGElementNames": {
          "type": "array"
        },
        "voidElementNames": {
          "type": "array"
        },
        "isKnownElement": {
          "type": "function"
        },
        "isKnownSVGElement": {
          "type": "function"
        },
        "isVoidElement": {
          "type": "function"
        },
        "A": {
          "type": "function",
          "refID": 104,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 104
                },
                "tagName": {
                  "type": "constant",
                  "value": "a"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ABBR": {
          "type": "function",
          "refID": 106,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 106
                },
                "tagName": {
                  "type": "constant",
                  "value": "abbr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ACRONYM": {
          "type": "function",
          "refID": 108,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 108
                },
                "tagName": {
                  "type": "constant",
                  "value": "acronym"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ADDRESS": {
          "type": "function",
          "refID": 110,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 110
                },
                "tagName": {
                  "type": "constant",
                  "value": "address"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "APPLET": {
          "type": "function",
          "refID": 112,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 112
                },
                "tagName": {
                  "type": "constant",
                  "value": "applet"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "AREA": {
          "type": "function",
          "refID": 114,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 114
                },
                "tagName": {
                  "type": "constant",
                  "value": "area"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ARTICLE": {
          "type": "function",
          "refID": 116,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 116
                },
                "tagName": {
                  "type": "constant",
                  "value": "article"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ASIDE": {
          "type": "function",
          "refID": 118,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 118
                },
                "tagName": {
                  "type": "constant",
                  "value": "aside"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "AUDIO": {
          "type": "function",
          "refID": 120,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 120
                },
                "tagName": {
                  "type": "constant",
                  "value": "audio"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "B": {
          "type": "function",
          "refID": 122,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 122
                },
                "tagName": {
                  "type": "constant",
                  "value": "b"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BASE": {
          "type": "function",
          "refID": 124,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 124
                },
                "tagName": {
                  "type": "constant",
                  "value": "base"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BASEFONT": {
          "type": "function",
          "refID": 126,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 126
                },
                "tagName": {
                  "type": "constant",
                  "value": "basefont"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BDI": {
          "type": "function",
          "refID": 128,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 128
                },
                "tagName": {
                  "type": "constant",
                  "value": "bdi"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BDO": {
          "type": "function",
          "refID": 130,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 130
                },
                "tagName": {
                  "type": "constant",
                  "value": "bdo"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BIG": {
          "type": "function",
          "refID": 132,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 132
                },
                "tagName": {
                  "type": "constant",
                  "value": "big"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BLOCKQUOTE": {
          "type": "function",
          "refID": 134,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 134
                },
                "tagName": {
                  "type": "constant",
                  "value": "blockquote"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BODY": {
          "type": "function",
          "refID": 136,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 136
                },
                "tagName": {
                  "type": "constant",
                  "value": "body"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BR": {
          "type": "function",
          "refID": 138,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 138
                },
                "tagName": {
                  "type": "constant",
                  "value": "br"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BUTTON": {
          "type": "function",
          "refID": 140,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 140
                },
                "tagName": {
                  "type": "constant",
                  "value": "button"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CANVAS": {
          "type": "function",
          "refID": 142,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 142
                },
                "tagName": {
                  "type": "constant",
                  "value": "canvas"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CAPTION": {
          "type": "function",
          "refID": 144,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 144
                },
                "tagName": {
                  "type": "constant",
                  "value": "caption"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CENTER": {
          "type": "function",
          "refID": 146,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 146
                },
                "tagName": {
                  "type": "constant",
                  "value": "center"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CITE": {
          "type": "function",
          "refID": 148,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 148
                },
                "tagName": {
                  "type": "constant",
                  "value": "cite"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CODE": {
          "type": "function",
          "refID": 150,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 150
                },
                "tagName": {
                  "type": "constant",
                  "value": "code"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COL": {
          "type": "function",
          "refID": 152,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 152
                },
                "tagName": {
                  "type": "constant",
                  "value": "col"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COLGROUP": {
          "type": "function",
          "refID": 154,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 154
                },
                "tagName": {
                  "type": "constant",
                  "value": "colgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COMMAND": {
          "type": "function",
          "refID": 156,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 156
                },
                "tagName": {
                  "type": "constant",
                  "value": "command"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATA": {
          "type": "function",
          "refID": 158,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 158
                },
                "tagName": {
                  "type": "constant",
                  "value": "data"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATAGRID": {
          "type": "function",
          "refID": 160,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 160
                },
                "tagName": {
                  "type": "constant",
                  "value": "datagrid"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATALIST": {
          "type": "function",
          "refID": 162,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 162
                },
                "tagName": {
                  "type": "constant",
                  "value": "datalist"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DD": {
          "type": "function",
          "refID": 164,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 164
                },
                "tagName": {
                  "type": "constant",
                  "value": "dd"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DEL": {
          "type": "function",
          "refID": 166,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 166
                },
                "tagName": {
                  "type": "constant",
                  "value": "del"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DETAILS": {
          "type": "function",
          "refID": 168,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 168
                },
                "tagName": {
                  "type": "constant",
                  "value": "details"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DFN": {
          "type": "function",
          "refID": 170,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 170
                },
                "tagName": {
                  "type": "constant",
                  "value": "dfn"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DIR": {
          "type": "function",
          "refID": 172,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 172
                },
                "tagName": {
                  "type": "constant",
                  "value": "dir"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DIV": {
          "type": "function",
          "refID": 174,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 174
                },
                "tagName": {
                  "type": "constant",
                  "value": "div"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DL": {
          "type": "function",
          "refID": 176,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 176
                },
                "tagName": {
                  "type": "constant",
                  "value": "dl"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DT": {
          "type": "function",
          "refID": 178,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 178
                },
                "tagName": {
                  "type": "constant",
                  "value": "dt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EM": {
          "type": "function",
          "refID": 180,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 180
                },
                "tagName": {
                  "type": "constant",
                  "value": "em"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EMBED": {
          "type": "function",
          "refID": 182,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 182
                },
                "tagName": {
                  "type": "constant",
                  "value": "embed"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EVENTSOURCE": {
          "type": "function",
          "refID": 184,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 184
                },
                "tagName": {
                  "type": "constant",
                  "value": "eventsource"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIELDSET": {
          "type": "function",
          "refID": 186,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 186
                },
                "tagName": {
                  "type": "constant",
                  "value": "fieldset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIGCAPTION": {
          "type": "function",
          "refID": 188,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 188
                },
                "tagName": {
                  "type": "constant",
                  "value": "figcaption"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIGURE": {
          "type": "function",
          "refID": 190,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 190
                },
                "tagName": {
                  "type": "constant",
                  "value": "figure"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT": {
          "type": "function",
          "refID": 192,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 192
                },
                "tagName": {
                  "type": "constant",
                  "value": "font"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FOOTER": {
          "type": "function",
          "refID": 194,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 194
                },
                "tagName": {
                  "type": "constant",
                  "value": "footer"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FORM": {
          "type": "function",
          "refID": 196,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 196
                },
                "tagName": {
                  "type": "constant",
                  "value": "form"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FRAME": {
          "type": "function",
          "refID": 198,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 198
                },
                "tagName": {
                  "type": "constant",
                  "value": "frame"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FRAMESET": {
          "type": "function",
          "refID": 200,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 200
                },
                "tagName": {
                  "type": "constant",
                  "value": "frameset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H1": {
          "type": "function",
          "refID": 202,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 202
                },
                "tagName": {
                  "type": "constant",
                  "value": "h1"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H2": {
          "type": "function",
          "refID": 204,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 204
                },
                "tagName": {
                  "type": "constant",
                  "value": "h2"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H3": {
          "type": "function",
          "refID": 206,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 206
                },
                "tagName": {
                  "type": "constant",
                  "value": "h3"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H4": {
          "type": "function",
          "refID": 208,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 208
                },
                "tagName": {
                  "type": "constant",
                  "value": "h4"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H5": {
          "type": "function",
          "refID": 210,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 210
                },
                "tagName": {
                  "type": "constant",
                  "value": "h5"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H6": {
          "type": "function",
          "refID": 212,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 212
                },
                "tagName": {
                  "type": "constant",
                  "value": "h6"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HEAD": {
          "type": "function",
          "refID": 214,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 214
                },
                "tagName": {
                  "type": "constant",
                  "value": "head"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HEADER": {
          "type": "function",
          "refID": 216,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 216
                },
                "tagName": {
                  "type": "constant",
                  "value": "header"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HGROUP": {
          "type": "function",
          "refID": 218,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 218
                },
                "tagName": {
                  "type": "constant",
                  "value": "hgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HR": {
          "type": "function",
          "refID": 220,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 220
                },
                "tagName": {
                  "type": "constant",
                  "value": "hr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HTML": {
          "type": "function",
          "refID": 222,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 222
                },
                "tagName": {
                  "type": "constant",
                  "value": "html"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "I": {
          "type": "function",
          "refID": 224,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 224
                },
                "tagName": {
                  "type": "constant",
                  "value": "i"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IFRAME": {
          "type": "function",
          "refID": 226,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 226
                },
                "tagName": {
                  "type": "constant",
                  "value": "iframe"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IMG": {
          "type": "function",
          "refID": 228,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 228
                },
                "tagName": {
                  "type": "constant",
                  "value": "img"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "INPUT": {
          "type": "function",
          "refID": 230,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 230
                },
                "tagName": {
                  "type": "constant",
                  "value": "input"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "INS": {
          "type": "function",
          "refID": 232,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 232
                },
                "tagName": {
                  "type": "constant",
                  "value": "ins"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ISINDEX": {
          "type": "function",
          "refID": 234,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 234
                },
                "tagName": {
                  "type": "constant",
                  "value": "isindex"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "KBD": {
          "type": "function",
          "refID": 236,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 236
                },
                "tagName": {
                  "type": "constant",
                  "value": "kbd"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "KEYGEN": {
          "type": "function",
          "refID": 238,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 238
                },
                "tagName": {
                  "type": "constant",
                  "value": "keygen"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LABEL": {
          "type": "function",
          "refID": 240,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 240
                },
                "tagName": {
                  "type": "constant",
                  "value": "label"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LEGEND": {
          "type": "function",
          "refID": 242,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 242
                },
                "tagName": {
                  "type": "constant",
                  "value": "legend"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LI": {
          "type": "function",
          "refID": 244,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 244
                },
                "tagName": {
                  "type": "constant",
                  "value": "li"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINK": {
          "type": "function",
          "refID": 246,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 246
                },
                "tagName": {
                  "type": "constant",
                  "value": "link"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MAIN": {
          "type": "function",
          "refID": 248,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 248
                },
                "tagName": {
                  "type": "constant",
                  "value": "main"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MAP": {
          "type": "function",
          "refID": 250,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 250
                },
                "tagName": {
                  "type": "constant",
                  "value": "map"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MARK": {
          "type": "function",
          "refID": 252,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 252
                },
                "tagName": {
                  "type": "constant",
                  "value": "mark"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MENU": {
          "type": "function",
          "refID": 254,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 254
                },
                "tagName": {
                  "type": "constant",
                  "value": "menu"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "META": {
          "type": "function",
          "refID": 256,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 256
                },
                "tagName": {
                  "type": "constant",
                  "value": "meta"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "METER": {
          "type": "function",
          "refID": 258,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 258
                },
                "tagName": {
                  "type": "constant",
                  "value": "meter"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NAV": {
          "type": "function",
          "refID": 260,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 260
                },
                "tagName": {
                  "type": "constant",
                  "value": "nav"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NOFRAMES": {
          "type": "function",
          "refID": 262,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 262
                },
                "tagName": {
                  "type": "constant",
                  "value": "noframes"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NOSCRIPT": {
          "type": "function",
          "refID": 264,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 264
                },
                "tagName": {
                  "type": "constant",
                  "value": "noscript"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OBJECT": {
          "type": "function",
          "refID": 266,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 266
                },
                "tagName": {
                  "type": "constant",
                  "value": "object"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OL": {
          "type": "function",
          "refID": 268,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 268
                },
                "tagName": {
                  "type": "constant",
                  "value": "ol"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OPTGROUP": {
          "type": "function",
          "refID": 270,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 270
                },
                "tagName": {
                  "type": "constant",
                  "value": "optgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OPTION": {
          "type": "function",
          "refID": 272,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 272
                },
                "tagName": {
                  "type": "constant",
                  "value": "option"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OUTPUT": {
          "type": "function",
          "refID": 274,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 274
                },
                "tagName": {
                  "type": "constant",
                  "value": "output"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "P": {
          "type": "function",
          "refID": 276,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 276
                },
                "tagName": {
                  "type": "constant",
                  "value": "p"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PARAM": {
          "type": "function",
          "refID": 278,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 278
                },
                "tagName": {
                  "type": "constant",
                  "value": "param"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PRE": {
          "type": "function",
          "refID": 280,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 280
                },
                "tagName": {
                  "type": "constant",
                  "value": "pre"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PROGRESS": {
          "type": "function",
          "refID": 282,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 282
                },
                "tagName": {
                  "type": "constant",
                  "value": "progress"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "Q": {
          "type": "function",
          "refID": 284,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 284
                },
                "tagName": {
                  "type": "constant",
                  "value": "q"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RP": {
          "type": "function",
          "refID": 286,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 286
                },
                "tagName": {
                  "type": "constant",
                  "value": "rp"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RT": {
          "type": "function",
          "refID": 288,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 288
                },
                "tagName": {
                  "type": "constant",
                  "value": "rt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RUBY": {
          "type": "function",
          "refID": 290,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 290
                },
                "tagName": {
                  "type": "constant",
                  "value": "ruby"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "S": {
          "type": "function",
          "refID": 292,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 292
                },
                "tagName": {
                  "type": "constant",
                  "value": "s"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SAMP": {
          "type": "function",
          "refID": 294,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 294
                },
                "tagName": {
                  "type": "constant",
                  "value": "samp"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SCRIPT": {
          "type": "function",
          "refID": 296,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 296
                },
                "tagName": {
                  "type": "constant",
                  "value": "script"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SECTION": {
          "type": "function",
          "refID": 298,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 298
                },
                "tagName": {
                  "type": "constant",
                  "value": "section"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SELECT": {
          "type": "function",
          "refID": 300,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 300
                },
                "tagName": {
                  "type": "constant",
                  "value": "select"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SMALL": {
          "type": "function",
          "refID": 302,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 302
                },
                "tagName": {
                  "type": "constant",
                  "value": "small"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SOURCE": {
          "type": "function",
          "refID": 304,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 304
                },
                "tagName": {
                  "type": "constant",
                  "value": "source"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SPAN": {
          "type": "function",
          "refID": 306,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 306
                },
                "tagName": {
                  "type": "constant",
                  "value": "span"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STRIKE": {
          "type": "function",
          "refID": 308,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 308
                },
                "tagName": {
                  "type": "constant",
                  "value": "strike"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STRONG": {
          "type": "function",
          "refID": 310,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 310
                },
                "tagName": {
                  "type": "constant",
                  "value": "strong"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STYLE": {
          "type": "function",
          "refID": 312,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 312
                },
                "tagName": {
                  "type": "constant",
                  "value": "style"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUB": {
          "type": "function",
          "refID": 314,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 314
                },
                "tagName": {
                  "type": "constant",
                  "value": "sub"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUMMARY": {
          "type": "function",
          "refID": 316,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 316
                },
                "tagName": {
                  "type": "constant",
                  "value": "summary"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUP": {
          "type": "function",
          "refID": 318,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 318
                },
                "tagName": {
                  "type": "constant",
                  "value": "sup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TABLE": {
          "type": "function",
          "refID": 320,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 320
                },
                "tagName": {
                  "type": "constant",
                  "value": "table"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TBODY": {
          "type": "function",
          "refID": 322,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 322
                },
                "tagName": {
                  "type": "constant",
                  "value": "tbody"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TD": {
          "type": "function",
          "refID": 324,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 324
                },
                "tagName": {
                  "type": "constant",
                  "value": "td"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXTAREA": {
          "type": "function",
          "refID": 326,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 326
                },
                "tagName": {
                  "type": "constant",
                  "value": "textarea"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TFOOT": {
          "type": "function",
          "refID": 328,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 328
                },
                "tagName": {
                  "type": "constant",
                  "value": "tfoot"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TH": {
          "type": "function",
          "refID": 330,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 330
                },
                "tagName": {
                  "type": "constant",
                  "value": "th"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "THEAD": {
          "type": "function",
          "refID": 332,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 332
                },
                "tagName": {
                  "type": "constant",
                  "value": "thead"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TIME": {
          "type": "function",
          "refID": 334,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 334
                },
                "tagName": {
                  "type": "constant",
                  "value": "time"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TITLE": {
          "type": "function",
          "refID": 336,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 336
                },
                "tagName": {
                  "type": "constant",
                  "value": "title"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TR": {
          "type": "function",
          "refID": 338,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 338
                },
                "tagName": {
                  "type": "constant",
                  "value": "tr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TRACK": {
          "type": "function",
          "refID": 340,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 340
                },
                "tagName": {
                  "type": "constant",
                  "value": "track"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TT": {
          "type": "function",
          "refID": 342,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 342
                },
                "tagName": {
                  "type": "constant",
                  "value": "tt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "U": {
          "type": "function",
          "refID": 344,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 344
                },
                "tagName": {
                  "type": "constant",
                  "value": "u"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "UL": {
          "type": "function",
          "refID": 346,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 346
                },
                "tagName": {
                  "type": "constant",
                  "value": "ul"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VAR": {
          "type": "function",
          "refID": 348,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 348
                },
                "tagName": {
                  "type": "constant",
                  "value": "var"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VIDEO": {
          "type": "function",
          "refID": 350,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 350
                },
                "tagName": {
                  "type": "constant",
                  "value": "video"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "WBR": {
          "type": "function",
          "refID": 352,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 352
                },
                "tagName": {
                  "type": "constant",
                  "value": "wbr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPH": {
          "type": "function",
          "refID": 354,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 354
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPHDEF": {
          "type": "function",
          "refID": 356,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 356
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyphDef"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPHITEM": {
          "type": "function",
          "refID": 358,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 358
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyphItem"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATE": {
          "type": "function",
          "refID": 360,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 360
                },
                "tagName": {
                  "type": "constant",
                  "value": "animate"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATECOLOR": {
          "type": "function",
          "refID": 362,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 362
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateColor"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATEMOTION": {
          "type": "function",
          "refID": 364,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 364
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateMotion"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATETRANSFORM": {
          "type": "function",
          "refID": 366,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 366
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateTransform"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CIRCLE": {
          "type": "function",
          "refID": 368,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 368
                },
                "tagName": {
                  "type": "constant",
                  "value": "circle"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CLIPPATH": {
          "type": "function",
          "refID": 370,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 370
                },
                "tagName": {
                  "type": "constant",
                  "value": "clipPath"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COLOR_PROFILE": {
          "type": "function",
          "refID": 372,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 372
                },
                "tagName": {
                  "type": "constant",
                  "value": "color-profile"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CURSOR": {
          "type": "function",
          "refID": 374,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 374
                },
                "tagName": {
                  "type": "constant",
                  "value": "cursor"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DEFS": {
          "type": "function",
          "refID": 376,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 376
                },
                "tagName": {
                  "type": "constant",
                  "value": "defs"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DESC": {
          "type": "function",
          "refID": 378,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 378
                },
                "tagName": {
                  "type": "constant",
                  "value": "desc"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ELLIPSE": {
          "type": "function",
          "refID": 380,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 380
                },
                "tagName": {
                  "type": "constant",
                  "value": "ellipse"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEBLEND": {
          "type": "function",
          "refID": 382,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 382
                },
                "tagName": {
                  "type": "constant",
                  "value": "feBlend"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOLORMATRIX": {
          "type": "function",
          "refID": 384,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 384
                },
                "tagName": {
                  "type": "constant",
                  "value": "feColorMatrix"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOMPONENTTRANSFER": {
          "type": "function",
          "refID": 386,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 386
                },
                "tagName": {
                  "type": "constant",
                  "value": "feComponentTransfer"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOMPOSITE": {
          "type": "function",
          "refID": 388,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 388
                },
                "tagName": {
                  "type": "constant",
                  "value": "feComposite"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECONVOLVEMATRIX": {
          "type": "function",
          "refID": 390,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 390
                },
                "tagName": {
                  "type": "constant",
                  "value": "feConvolveMatrix"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDIFFUSELIGHTING": {
          "type": "function",
          "refID": 392,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 392
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDiffuseLighting"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDISPLACEMENTMAP": {
          "type": "function",
          "refID": 394,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 394
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDisplacementMap"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDISTANTLIGHT": {
          "type": "function",
          "refID": 396,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 396
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDistantLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFLOOD": {
          "type": "function",
          "refID": 398,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 398
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFlood"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCA": {
          "type": "function",
          "refID": 400,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 400
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncA"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCB": {
          "type": "function",
          "refID": 402,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 402
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncB"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCG": {
          "type": "function",
          "refID": 404,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 404
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncG"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCR": {
          "type": "function",
          "refID": 406,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 406
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncR"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEGAUSSIANBLUR": {
          "type": "function",
          "refID": 408,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 408
                },
                "tagName": {
                  "type": "constant",
                  "value": "feGaussianBlur"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEIMAGE": {
          "type": "function",
          "refID": 410,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 410
                },
                "tagName": {
                  "type": "constant",
                  "value": "feImage"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMERGE": {
          "type": "function",
          "refID": 412,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 412
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMerge"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMERGENODE": {
          "type": "function",
          "refID": 414,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 414
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMergeNode"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMORPHOLOGY": {
          "type": "function",
          "refID": 416,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 416
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMorphology"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEOFFSET": {
          "type": "function",
          "refID": 418,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 418
                },
                "tagName": {
                  "type": "constant",
                  "value": "feOffset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEPOINTLIGHT": {
          "type": "function",
          "refID": 420,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 420
                },
                "tagName": {
                  "type": "constant",
                  "value": "fePointLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FESPECULARLIGHTING": {
          "type": "function",
          "refID": 422,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 422
                },
                "tagName": {
                  "type": "constant",
                  "value": "feSpecularLighting"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FESPOTLIGHT": {
          "type": "function",
          "refID": 424,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 424
                },
                "tagName": {
                  "type": "constant",
                  "value": "feSpotLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FETILE": {
          "type": "function",
          "refID": 426,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 426
                },
                "tagName": {
                  "type": "constant",
                  "value": "feTile"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FETURBULENCE": {
          "type": "function",
          "refID": 428,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 428
                },
                "tagName": {
                  "type": "constant",
                  "value": "feTurbulence"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FILTER": {
          "type": "function",
          "refID": 430,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 430
                },
                "tagName": {
                  "type": "constant",
                  "value": "filter"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE": {
          "type": "function",
          "refID": 432,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 432
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_FORMAT": {
          "type": "function",
          "refID": 434,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 434
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-format"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_NAME": {
          "type": "function",
          "refID": 436,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 436
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-name"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_SRC": {
          "type": "function",
          "refID": 438,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 438
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-src"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_URI": {
          "type": "function",
          "refID": 440,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 440
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-uri"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FOREIGNOBJECT": {
          "type": "function",
          "refID": 442,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 442
                },
                "tagName": {
                  "type": "constant",
                  "value": "foreignObject"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "G": {
          "type": "function",
          "refID": 444,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 444
                },
                "tagName": {
                  "type": "constant",
                  "value": "g"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "GLYPH": {
          "type": "function",
          "refID": 446,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 446
                },
                "tagName": {
                  "type": "constant",
                  "value": "glyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "GLYPHREF": {
          "type": "function",
          "refID": 448,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 448
                },
                "tagName": {
                  "type": "constant",
                  "value": "glyphRef"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HKERN": {
          "type": "function",
          "refID": 450,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 450
                },
                "tagName": {
                  "type": "constant",
                  "value": "hkern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IMAGE": {
          "type": "function",
          "refID": 452,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 452
                },
                "tagName": {
                  "type": "constant",
                  "value": "image"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINE": {
          "type": "function",
          "refID": 454,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 454
                },
                "tagName": {
                  "type": "constant",
                  "value": "line"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINEARGRADIENT": {
          "type": "function",
          "refID": 456,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 456
                },
                "tagName": {
                  "type": "constant",
                  "value": "linearGradient"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MARKER": {
          "type": "function",
          "refID": 458,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 458
                },
                "tagName": {
                  "type": "constant",
                  "value": "marker"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MASK": {
          "type": "function",
          "refID": 460,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 460
                },
                "tagName": {
                  "type": "constant",
                  "value": "mask"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "METADATA": {
          "type": "function",
          "refID": 462,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 462
                },
                "tagName": {
                  "type": "constant",
                  "value": "metadata"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MISSING_GLYPH": {
          "type": "function",
          "refID": 464,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 464
                },
                "tagName": {
                  "type": "constant",
                  "value": "missing-glyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PATH": {
          "type": "function",
          "refID": 466,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 466
                },
                "tagName": {
                  "type": "constant",
                  "value": "path"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PATTERN": {
          "type": "function",
          "refID": 468,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 468
                },
                "tagName": {
                  "type": "constant",
                  "value": "pattern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "POLYGON": {
          "type": "function",
          "refID": 470,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 470
                },
                "tagName": {
                  "type": "constant",
                  "value": "polygon"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "POLYLINE": {
          "type": "function",
          "refID": 472,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 472
                },
                "tagName": {
                  "type": "constant",
                  "value": "polyline"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RADIALGRADIENT": {
          "type": "function",
          "refID": 474,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 474
                },
                "tagName": {
                  "type": "constant",
                  "value": "radialGradient"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RECT": {
          "type": "function",
          "refID": 476,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 476
                },
                "tagName": {
                  "type": "constant",
                  "value": "rect"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SET": {
          "type": "function",
          "refID": 478,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 478
                },
                "tagName": {
                  "type": "constant",
                  "value": "set"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STOP": {
          "type": "function",
          "refID": 480,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 480
                },
                "tagName": {
                  "type": "constant",
                  "value": "stop"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SVG": {
          "type": "function",
          "refID": 482,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 482
                },
                "tagName": {
                  "type": "constant",
                  "value": "svg"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SWITCH": {
          "type": "function",
          "refID": 484,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 484
                },
                "tagName": {
                  "type": "constant",
                  "value": "switch"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SYMBOL": {
          "type": "function",
          "refID": 486,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 486
                },
                "tagName": {
                  "type": "constant",
                  "value": "symbol"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXT": {
          "type": "function",
          "refID": 488,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 488
                },
                "tagName": {
                  "type": "constant",
                  "value": "text"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXTPATH": {
          "type": "function",
          "refID": 490,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 490
                },
                "tagName": {
                  "type": "constant",
                  "value": "textPath"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TREF": {
          "type": "function",
          "refID": 492,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 492
                },
                "tagName": {
                  "type": "constant",
                  "value": "tref"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TSPAN": {
          "type": "function",
          "refID": 494,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 494
                },
                "tagName": {
                  "type": "constant",
                  "value": "tspan"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "USE": {
          "type": "function",
          "refID": 496,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 496
                },
                "tagName": {
                  "type": "constant",
                  "value": "use"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VIEW": {
          "type": "function",
          "refID": 498,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 498
                },
                "tagName": {
                  "type": "constant",
                  "value": "view"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VKERN": {
          "type": "function",
          "refID": 500,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 500
                },
                "tagName": {
                  "type": "constant",
                  "value": "vkern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CharRef": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 503
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 503
                }
              }
            }
          }
        },
        "Comment": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 506
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 506
                }
              }
            }
          }
        },
        "Raw": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 509
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 509
                }
              }
            }
          }
        },
        "isArray": {
          "type": "function"
        },
        "isConstructedObject": {
          "type": "function"
        },
        "isNully": {
          "type": "function"
        },
        "isValidAttributeName": {
          "type": "function"
        },
        "flattenAttributes": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "TEXTMODE": {
          "type": "object",
          "members": {
            "STRING": {
              "type": "constant",
              "value": 1
            },
            "RCDATA": {
              "type": "constant",
              "value": 2
            },
            "ATTRIBUTE": {
              "type": "constant",
              "value": 3
            }
          }
        },
        "toText": {
          "type": "function"
        }
      }
    }
  },
  "html-tools": {
    "HTMLTools": {
      "type": "object",
      "members": {
        "Parse": {
          "type": "object",
          "members": {
            "getCharacterReference": {
              "type": "function"
            },
            "getComment": {
              "type": "function"
            },
            "getDoctype": {
              "type": "function"
            },
            "getHTMLToken": {
              "type": "function"
            },
            "getTagToken": {
              "type": "function"
            },
            "getContent": {
              "type": "function"
            },
            "getRCData": {
              "type": "function"
            }
          }
        },
        "asciiLowerCase": {
          "type": "function"
        },
        "properCaseTagName": {
          "type": "function"
        },
        "properCaseAttributeName": {
          "type": "function"
        },
        "Scanner": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "rest": {
                  "type": "function"
                },
                "isEOF": {
                  "type": "function"
                },
                "fatal": {
                  "type": "function"
                },
                "peek": {
                  "type": "function"
                }
              }
            }
          }
        },
        "TEMPLATE_TAG_POSITION": {
          "type": "object",
          "members": {
            "ELEMENT": {
              "type": "constant",
              "value": 1
            },
            "IN_START_TAG": {
              "type": "constant",
              "value": 2
            },
            "IN_ATTRIBUTE": {
              "type": "constant",
              "value": 3
            },
            "IN_RCDATA": {
              "type": "constant",
              "value": 4
            },
            "IN_RAWTEXT": {
              "type": "constant",
              "value": 5
            }
          }
        },
        "TemplateTag": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructorName": {
                  "type": "constant",
                  "value": "HTMLTools.TemplateTag"
                },
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "parseFragment": {
          "type": "function"
        },
        "codePointToString": {
          "type": "function"
        }
      }
    }
  },
  "blaze-tools": {
    "BlazeTools": {
      "type": "object",
      "members": {
        "parseNumber": {
          "type": "function"
        },
        "parseIdentifierName": {
          "type": "function"
        },
        "parseStringLiteral": {
          "type": "function"
        },
        "EmitCode": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toJSLiteral": {
          "type": "function"
        },
        "toObjectLiteralKey": {
          "type": "function"
        },
        "ToJSVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "type": "function"
            },
            "def": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "generateCall": {
                  "type": "function"
                },
                "generateAttrsDictionary": {
                  "type": "function"
                },
                "visit": {
                  "type": "function"
                },
                "visitFunction": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toJS": {
          "type": "function"
        }
      }
    }
  },
  "spacebars-compiler": {
    "SpacebarsCompiler": {
      "type": "object",
      "members": {
        "TemplateTag": {
          "type": "function",
          "members": {
            "parse": {
              "type": "function"
            },
            "peek": {
              "type": "function"
            },
            "parseCompleteTag": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructorName": {
                  "type": "constant",
                  "value": "SpacebarsCompiler.TemplateTag"
                },
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "optimize": {
          "type": "function"
        },
        "CodeGen": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "codeGenTemplateTag": {
                  "type": "function"
                },
                "codeGenPath": {
                  "type": "function"
                },
                "codeGenArgValue": {
                  "type": "function"
                },
                "codeGenMustache": {
                  "type": "function"
                },
                "codeGenMustacheArgs": {
                  "type": "function"
                },
                "codeGenBlock": {
                  "type": "function"
                },
                "codeGenInclusionDataFunc": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isReservedName": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "compile": {
          "type": "function"
        },
        "codeGen": {
          "type": "function"
        }
      }
    }
  },
  "jquery": {},
  "id-map": {
    "IdMap": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "ordered-dict": {
    "OrderedDict": {
      "type": "function",
      "members": {
        "BREAK": {
          "type": "object"
        },
        "prototype": {
          "type": "object",
          "members": {
            "empty": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "putBefore": {
              "type": "function"
            },
            "append": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "first": {
              "type": "function"
            },
            "firstValue": {
              "type": "function"
            },
            "last": {
              "type": "function"
            },
            "lastValue": {
              "type": "function"
            },
            "prev": {
              "type": "function"
            },
            "next": {
              "type": "function"
            },
            "moveBefore": {
              "type": "function"
            },
            "indexOf": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "random": {
    "Random": {
      "type": "object",
      "members": {
        "createWithSeeds": {
          "type": "function"
        },
        "fraction": {
          "type": "function"
        },
        "hexString": {
          "type": "function"
        },
        "id": {
          "type": "function"
        },
        "secret": {
          "type": "function"
        },
        "choice": {
          "type": "function"
        }
      }
    }
  },
  "geojson-utils": {
    "GeoJSON": {
      "type": "object",
      "members": {
        "lineStringsIntersect": {
          "type": "function"
        },
        "pointInBoundingBox": {
          "type": "function"
        },
        "pointInPolygon": {
          "type": "function"
        },
        "numberToRadius": {
          "type": "function"
        },
        "numberToDegree": {
          "type": "function"
        },
        "drawCircle": {
          "type": "function"
        },
        "rectangleCentroid": {
          "type": "function"
        },
        "pointDistance": {
          "type": "function"
        },
        "geometryWithinRadius": {
          "type": "function"
        },
        "area": {
          "type": "function"
        },
        "centroid": {
          "type": "function"
        },
        "simplify": {
          "type": "function"
        },
        "destinationPoint": {
          "type": "function"
        }
      }
    }
  },
  "minimongo": {
    "LocalCollection": {
      "type": "function",
      "members": {
        "Cursor": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "rewind": {
                  "type": "function"
                },
                "forEach": {
                  "type": "function"
                },
                "getTransform": {
                  "type": "function"
                },
                "map": {
                  "type": "function"
                },
                "fetch": {
                  "type": "function"
                },
                "count": {
                  "type": "function"
                },
                "observe": {
                  "type": "function"
                },
                "observeChanges": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ObserveHandle": {
          "type": "function"
        },
        "wrapTransform": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            },
            "insert": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "saveOriginals": {
              "type": "function"
            },
            "retrieveOriginals": {
              "type": "function"
            },
            "pauseObservers": {
              "type": "function"
            },
            "resumeObservers": {
              "type": "function"
            }
          }
        }
      }
    },
    "Minimongo": {
      "type": "object",
      "members": {
        "Matcher": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "documentMatches": {
                  "type": "function"
                },
                "hasGeoQuery": {
                  "type": "function"
                },
                "hasWhere": {
                  "type": "function"
                },
                "isSimple": {
                  "type": "function"
                },
                "combineIntoProjection": {
                  "type": "function"
                },
                "affectedByModifier": {
                  "type": "function"
                },
                "canBecomeTrueByModifier": {
                  "type": "function"
                },
                "matchingDocument": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Sorter": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getComparator": {
                  "type": "function"
                },
                "affectedByModifier": {
                  "type": "function"
                },
                "combineIntoProjection": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "MinimongoTest": {
      "type": "object",
      "members": {
        "makeLookupFunction": {
          "type": "function"
        }
      }
    }
  },
  "observe-sequence": {
    "ObserveSequence": {
      "type": "object",
      "members": {
        "observe": {
          "type": "function"
        },
        "fetch": {
          "type": "function"
        }
      }
    }
  },
  "reactive-var": {
    "ReactiveVar": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "toString": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "blaze": {
    "Blaze": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 31
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 47
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 31
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 47
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "UI": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 31
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 47
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 31
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 47
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Handlebars": {
      "type": "object",
      "members": {
        "registerHelper": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "templating": {},
  "spacebars": {
    "Spacebars": {
      "type": "object",
      "members": {
        "include": {
          "type": "function"
        },
        "mustacheImpl": {
          "type": "function"
        },
        "mustache": {
          "type": "function"
        },
        "attrMustache": {
          "type": "function"
        },
        "dataMustache": {
          "type": "function"
        },
        "makeRaw": {
          "type": "function"
        },
        "call": {
          "type": "function"
        },
        "kw": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        },
        "dot": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "TemplateWith": {
          "type": "function"
        }
      }
    }
  },
  "ui": {
    "Blaze": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 31
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 47
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 31
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 47
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "UI": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 31
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 47
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 31
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 47
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Handlebars": {
      "type": "object",
      "members": {
        "registerHelper": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "boilerplate-generator": {
    "Boilerplate": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "toHTML": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "webapp-hashing": {
    "WebAppHashing": {
      "type": "object",
      "members": {
        "calculateClientHash": {
          "type": "function"
        }
      }
    }
  },
  "webapp": {
    "WebApp": {
      "type": "object",
      "members": {
        "defaultArch": {
          "type": "constant",
          "value": "web.browser"
        },
        "clientPrograms": {
          "type": "object",
          "members": {
            "web.browser": {
              "type": "object",
              "members": {
                "manifest": {
                  "type": "array"
                },
                "version": {
                  "type": "constant",
                  "value": "505aa27e7f40dcea58f1f9dba8fbde83ed029948"
                },
                "PUBLIC_SETTINGS": {
                  "type": "undefined"
                }
              }
            },
            "web.cordova": {
              "type": "object",
              "members": {
                "manifest": {
                  "type": "array"
                },
                "version": {
                  "type": "constant",
                  "value": "c7ea561a189581ec595df8666cdcb26ae60b780f"
                },
                "PUBLIC_SETTINGS": {
                  "type": "undefined"
                }
              }
            }
          }
        },
        "categorizeRequest": {
          "type": "function"
        },
        "addHtmlAttributeHook": {
          "type": "function"
        },
        "connectHandlers": {
          "type": "function",
          "members": {
            "use": {
              "type": "function",
              "refID": 11
            },
            "handle": {
              "type": "function",
              "refID": 13
            },
            "listen": {
              "type": "function",
              "refID": 15
            },
            "setMaxListeners": {
              "type": "function",
              "refID": 17
            },
            "emit": {
              "type": "function",
              "refID": 19
            },
            "addListener": {
              "type": "function",
              "refID": 21
            },
            "on": {
              "ref": 21
            },
            "once": {
              "type": "function",
              "refID": 23
            },
            "removeListener": {
              "type": "function",
              "refID": 25
            },
            "removeAllListeners": {
              "type": "function",
              "refID": 27
            },
            "listeners": {
              "type": "function",
              "refID": 29
            },
            "route": {
              "type": "constant",
              "value": "/"
            },
            "stack": {
              "type": "array"
            }
          }
        },
        "rawConnectHandlers": {
          "type": "function",
          "members": {
            "use": {
              "ref": 11
            },
            "handle": {
              "ref": 13
            },
            "listen": {
              "ref": 15
            },
            "setMaxListeners": {
              "ref": 17
            },
            "emit": {
              "ref": 19
            },
            "addListener": {
              "ref": 21
            },
            "on": {
              "ref": 21
            },
            "once": {
              "ref": 23
            },
            "removeListener": {
              "ref": 25
            },
            "removeAllListeners": {
              "ref": 27
            },
            "listeners": {
              "ref": 29
            },
            "route": {
              "type": "constant",
              "value": "/"
            },
            "stack": {
              "type": "array"
            }
          }
        },
        "httpServer": {
          "type": "object",
          "members": {
            "domain": {
              "type": "null",
              "value": null
            },
            "connections": {
              "type": "constant",
              "value": 1
            },
            "timeout": {
              "type": "constant",
              "value": 5000
            },
            "setTimeout": {
              "type": "function"
            },
            "listen": {
              "type": "function"
            },
            "address": {
              "type": "function"
            },
            "getConnections": {
              "type": "function"
            },
            "close": {
              "type": "function"
            },
            "listenFD": {
              "type": "function"
            },
            "ref": {
              "type": "function"
            },
            "unref": {
              "type": "function"
            },
            "setMaxListeners": {
              "ref": 17
            },
            "emit": {
              "ref": 19
            },
            "addListener": {
              "ref": 21
            },
            "on": {
              "ref": 21
            },
            "once": {
              "ref": 23
            },
            "removeListener": {
              "ref": 25
            },
            "removeAllListeners": {
              "ref": 27
            },
            "listeners": {
              "ref": 29
            }
          }
        },
        "suppressConnectErrors": {
          "type": "function"
        },
        "onListening": {
          "type": "function"
        },
        "clientHash": {
          "type": "function"
        },
        "calculateClientHashRefreshable": {
          "type": "function"
        },
        "calculateClientHashNonRefreshable": {
          "type": "function"
        },
        "calculateClientHashCordova": {
          "type": "function"
        }
      }
    },
    "main": {
      "type": "function"
    },
    "WebAppInternals": {
      "type": "object",
      "members": {
        "identifyBrowser": {
          "type": "function"
        },
        "generateBoilerplateInstance": {
          "type": "function"
        },
        "staticFilesMiddleware": {
          "type": "function"
        },
        "bindToProxy": {
          "type": "function"
        },
        "addRoute": {
          "type": "function"
        },
        "reloadClientPrograms": {
          "type": "function"
        },
        "generateBoilerplate": {
          "type": "function"
        },
        "staticFiles": {
          "type": "object",
          "members": {
            "/packages/underscore.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/underscore.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/0a80a8623e1b40b5df5a05582f288ddd586eaa18.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/0a80a8623e1b40b5df5a05582f288ddd586eaa18.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/underscore.js.map"
                }
              }
            },
            "/packages/meteor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/meteor.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/81e2f06cff198adaa81b3bc09fc4f3728b7370ec.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/81e2f06cff198adaa81b3bc09fc4f3728b7370ec.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/meteor.js.map"
                }
              }
            },
            "/packages/json.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/json.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e22856eae714c681199eabc5c0710b904b125554.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/e22856eae714c681199eabc5c0710b904b125554.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/json.js.map"
                }
              }
            },
            "/packages/base64.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/base64.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/1a63019243b73298e2964e6d4680f25bca657726.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/1a63019243b73298e2964e6d4680f25bca657726.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/base64.js.map"
                }
              }
            },
            "/packages/ejson.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/ejson.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/71047b64b5196348bdbe5fd5eea9ac97a5a9eb14.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/71047b64b5196348bdbe5fd5eea9ac97a5a9eb14.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/ejson.js.map"
                }
              }
            },
            "/packages/logging.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/logging.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/07e201b648f16be8435a4f666156995eeda0c750.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/07e201b648f16be8435a4f666156995eeda0c750.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/logging.js.map"
                }
              }
            },
            "/packages/reload.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/reload.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/da8974b7231dd8c0caccb5f322dcf97329d486d1.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/da8974b7231dd8c0caccb5f322dcf97329d486d1.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/reload.js.map"
                }
              }
            },
            "/packages/tracker.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/tracker.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/517c8fe8ed6408951a30941e64a5383a7174bcfa.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/517c8fe8ed6408951a30941e64a5383a7174bcfa.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/tracker.js.map"
                }
              }
            },
            "/packages/random.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/random.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/fe7b46080c91ce482acf6fc326afbc5b176f0502.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/fe7b46080c91ce482acf6fc326afbc5b176f0502.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/random.js.map"
                }
              }
            },
            "/packages/retry.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/retry.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/1f1dd2c35d300110fdaba51ce4473583bc3bf031.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/1f1dd2c35d300110fdaba51ce4473583bc3bf031.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/retry.js.map"
                }
              }
            },
            "/packages/check.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/check.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/ac81167b8513b85b926c167bba423981b0c4cf9c.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/ac81167b8513b85b926c167bba423981b0c4cf9c.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/check.js.map"
                }
              }
            },
            "/packages/id-map.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/id-map.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9ea6eaae8d74693ce2505a858d9a5e60cf191298.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9ea6eaae8d74693ce2505a858d9a5e60cf191298.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/id-map.js.map"
                }
              }
            },
            "/packages/ordered-dict.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/ordered-dict.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/ordered-dict.js.map"
                }
              }
            },
            "/packages/geojson-utils.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/geojson-utils.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/81b79d5cf96d00b4b7a28987debcffb665c17526.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/81b79d5cf96d00b4b7a28987debcffb665c17526.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/geojson-utils.js.map"
                }
              }
            },
            "/packages/minimongo.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/minimongo.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e8806aa7782b729b2517ebc0cd10b321667f1427.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/e8806aa7782b729b2517ebc0cd10b321667f1427.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/minimongo.js.map"
                }
              }
            },
            "/packages/ddp.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/ddp.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/41b62dcceb3ce0de6ca79c6aed088cccde6a44d8.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/41b62dcceb3ce0de6ca79c6aed088cccde6a44d8.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/ddp.js.map"
                }
              }
            },
            "/packages/follower-livedata.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/follower-livedata.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/74156c6baa89da861fc4ddb58ef158eac71e58e0.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/74156c6baa89da861fc4ddb58ef158eac71e58e0.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/follower-livedata.js.map"
                }
              }
            },
            "/packages/application-configuration.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/application-configuration.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/application-configuration.js.map"
                }
              }
            },
            "/packages/insecure.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/insecure.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/3dc9d4a2dad55999b5b15a447d57f3d5fb66b290.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/3dc9d4a2dad55999b5b15a447d57f3d5fb66b290.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/insecure.js.map"
                }
              }
            },
            "/packages/mongo.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/mongo.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/052f30e968644b2b39a96605ffee73a7684ff37b.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/052f30e968644b2b39a96605ffee73a7684ff37b.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/mongo.js.map"
                }
              }
            },
            "/packages/autoupdate.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/autoupdate.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9a5ea03bf057815385bf569c7acc2c285c005491.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9a5ea03bf057815385bf569c7acc2c285c005491.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/autoupdate.js.map"
                }
              }
            },
            "/packages/meteor-platform.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/meteor-platform.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/499a2f8522e25820b1153c69a92751ccaae507b3.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/499a2f8522e25820b1153c69a92751ccaae507b3.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/meteor-platform.js.map"
                }
              }
            },
            "/packages/less.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/less.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/7d1bf981a25a449d6270558bcfc983313c40cd26.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/7d1bf981a25a449d6270558bcfc983313c40cd26.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/less.js.map"
                }
              }
            },
            "/packages/reactive-dict.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/reactive-dict.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/6b25309b1f0dcf775b44984324878d6f8ad1abc2.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/6b25309b1f0dcf775b44984324878d6f8ad1abc2.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/reactive-dict.js.map"
                }
              }
            },
            "/packages/deps.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/deps.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/504589e1e9585dec8f9f6094e5a87b22de3783a1.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/504589e1e9585dec8f9f6094e5a87b22de3783a1.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/deps.js.map"
                }
              }
            },
            "/packages/jquery.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/jquery.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/dd8bac56f8fd3666d433d2285ae01e52597cc51a.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/dd8bac56f8fd3666d433d2285ae01e52597cc51a.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/jquery.js.map"
                }
              }
            },
            "/packages/htmljs.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/htmljs.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/567eb96d5d22631c03d6aca6afa4c42f0d1295f2.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/567eb96d5d22631c03d6aca6afa4c42f0d1295f2.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/htmljs.js.map"
                }
              }
            },
            "/packages/observe-sequence.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/observe-sequence.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/2fd807ea171ead273b9e6458607cb226012d9240.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/2fd807ea171ead273b9e6458607cb226012d9240.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/observe-sequence.js.map"
                }
              }
            },
            "/packages/reactive-var.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/reactive-var.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/20335b7b37165980ddd9f23943b2e5b00aae1cc2.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/20335b7b37165980ddd9f23943b2e5b00aae1cc2.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/reactive-var.js.map"
                }
              }
            },
            "/packages/blaze.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/blaze.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/efa68f65e67544b5a05509804bf97e2c91ce75eb.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/efa68f65e67544b5a05509804bf97e2c91ce75eb.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/blaze.js.map"
                }
              }
            },
            "/packages/templating.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/templating.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/599ba307216da826d8b335332ebcc9a497a369a0.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/599ba307216da826d8b335332ebcc9a497a369a0.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/templating.js.map"
                }
              }
            },
            "/packages/iron_core.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/iron_core.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/fe41a023a7a6f1ded90b0729437928a8ddccc7d4.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/fe41a023a7a6f1ded90b0729437928a8ddccc7d4.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/iron_core.js.map"
                }
              }
            },
            "/packages/ui.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/ui.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/5a663333fd30f8fd913f110e0ef779e84f67c4b8.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/5a663333fd30f8fd913f110e0ef779e84f67c4b8.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/ui.js.map"
                }
              }
            },
            "/packages/iron_dynamic-template.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/iron_dynamic-template.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/32038885cb1dad7957291ffebfffcb7f8cd57d20.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/32038885cb1dad7957291ffebfffcb7f8cd57d20.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/iron_dynamic-template.js.map"
                }
              }
            },
            "/packages/iron_layout.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/iron_layout.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/080dc95e770e3130757bf6af69fd0abb99573ae4.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/080dc95e770e3130757bf6af69fd0abb99573ae4.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/iron_layout.js.map"
                }
              }
            },
            "/packages/iron_router.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/iron_router.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/da7f2ac81c3fd9daebf49ce9a6980a54caa1dc17.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/da7f2ac81c3fd9daebf49ce9a6980a54caa1dc17.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/iron_router.js.map"
                }
              }
            },
            "/packages/localstorage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/localstorage.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/localstorage.js.map"
                }
              }
            },
            "/packages/accounts-base.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/accounts-base.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/88bb0577cebfbd40b522bb337f8ff8af92244c2f.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/88bb0577cebfbd40b522bb337f8ff8af92244c2f.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/accounts-base.js.map"
                }
              }
            },
            "/packages/sha.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/sha.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/65ef52f7221944768bfc2049d6b7e163c8ae2615.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/65ef52f7221944768bfc2049d6b7e163c8ae2615.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/sha.js.map"
                }
              }
            },
            "/packages/srp.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/srp.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e2e28156e8c912d504a3586351c8a1119f664cfd.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/e2e28156e8c912d504a3586351c8a1119f664cfd.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/srp.js.map"
                }
              }
            },
            "/packages/accounts-password.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/accounts-password.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/3845cc71ad2dc1378b7d8cc4164a78359506dd40.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/3845cc71ad2dc1378b7d8cc4164a78359506dd40.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/accounts-password.js.map"
                }
              }
            },
            "/packages/velocity_core.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/velocity_core.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/cecf2443254038195518d507d5fe0ecdc5dce435.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/cecf2443254038195518d507d5fe0ecdc5dce435.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/velocity_core.js.map"
                }
              }
            },
            "/packages/amplify.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/amplify.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/0943ecb804169b991257a319fa92b9e6f34e2d1b.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/0943ecb804169b991257a319fa92b9e6f34e2d1b.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/amplify.js.map"
                }
              }
            },
            "/packages/velocity_html-reporter.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/a615bf3410d795106d7a78c6a94379745879f7df.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/a615bf3410d795106d7a78c6a94379745879f7df.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter.js.map"
                }
              }
            },
            "/packages/velocity_shim.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/velocity_shim.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/14363d085a412115605c41536e4f2867425b89d5.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/14363d085a412115605c41536e4f2867425b89d5.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/velocity_shim.js.map"
                }
              }
            },
            "/packages/mike_mocha.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/mike_mocha.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/81e347a16dc440779b8caa4163b6179df74c6bfc.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/81e347a16dc440779b8caa4163b6179df74c6bfc.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/mike_mocha.js.map"
                }
              }
            },
            "/packages/coffeescript.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/coffeescript.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/969f68786bbc68e6cad299e74922a53af3d1404b.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/969f68786bbc68e6cad299e74922a53af3d1404b.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/coffeescript.js.map"
                }
              }
            },
            "/packages/practicalmeteor_chai.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/practicalmeteor_chai.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/7fbbbec9a13f4adf082b394c5ddd7230d84afc48.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/7fbbbec9a13f4adf082b394c5ddd7230d84afc48.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/practicalmeteor_chai.js.map"
                }
              }
            },
            "/packages/practicalmeteor_loglevel.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/practicalmeteor_loglevel.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9185331dfa11fd235edfbef93838d4ca3244d638.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9185331dfa11fd235edfbef93838d4ca3244d638.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/practicalmeteor_loglevel.js.map"
                }
              }
            },
            "/packages/sanjo_jasmine.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/sanjo_jasmine.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/6c8e0ce3908e66d0de626b7c10139a1ad3351d76.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/6c8e0ce3908e66d0de626b7c10139a1ad3351d76.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/sanjo_jasmine.js.map"
                }
              }
            },
            "/packages/webapp.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/webapp.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e1be090051b82f046484dccc2de7d747e50c7328.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/e1be090051b82f046484dccc2de7d747e50c7328.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/webapp.js.map"
                }
              }
            },
            "/packages/session.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/session.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e436deefadc999c21b6fd16e8e1ecce55c3c3a55.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/e436deefadc999c21b6fd16e8e1ecce55c3c3a55.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/session.js.map"
                }
              }
            },
            "/packages/livedata.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/livedata.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/718526445deb4d9baacb6d92c551adea1d36c1e1.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/718526445deb4d9baacb6d92c551adea1d36c1e1.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/livedata.js.map"
                }
              }
            },
            "/packages/spacebars.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/spacebars.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/7f53771c84a2eafac2b561c9796dda0d8af8e7f5.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/7f53771c84a2eafac2b561c9796dda0d8af8e7f5.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/spacebars.js.map"
                }
              }
            },
            "/packages/launch-screen.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/launch-screen.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/13e1092ebecdb7208762500188f1dc2dea5603e9.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/13e1092ebecdb7208762500188f1dc2dea5603e9.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/launch-screen.js.map"
                }
              }
            },
            "/packages/global-imports.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/global-imports.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/templates/template.app-body.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/client/templates/template.app-body.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/templates/template.app-not-found.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/client/templates/template.app-not-found.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/templates/template.auth-join.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/client/templates/template.auth-join.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/templates/template.auth-signin.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/client/templates/template.auth-signin.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/templates/template.lists-show.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/client/templates/template.lists-show.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/templates/template.loading.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/client/templates/template.loading.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/templates/template.todos-item.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/client/templates/template.todos-item.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/lib/jquery.touchwipe.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/client/lib/jquery.touchwipe.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/collections.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/lib/collections.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/router.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/lib/router.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/templates/app-body.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/client/templates/app-body.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/templates/auth-join.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/client/templates/auth-join.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/templates/auth-signin.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/client/templates/auth-signin.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/templates/lists-show.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/client/templates/lists-show.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/templates/todos-item.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/client/templates/todos-item.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/service-configuration.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/service-configuration.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/262da6fb1e9c97be84333c429c9a2929c80f8e3b.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/262da6fb1e9c97be84333c429c9a2929c80f8e3b.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/service-configuration.js.map"
                }
              }
            },
            "/packages/velocity_test-proxy.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/velocity_test-proxy.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/d6f609666eb2d7e3562b88fc6612d26a3066f5b4.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/d6f609666eb2d7e3562b88fc6612d26a3066f5b4.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/velocity_test-proxy.js.map"
                }
              }
            },
            "/packages/velocity_node-soft-mirror.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/velocity_node-soft-mirror.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/acf27a727fa9aa2f29f237ade3b2046fb9890e36.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/acf27a727fa9aa2f29f237ade3b2046fb9890e36.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/velocity_node-soft-mirror.js.map"
                }
              }
            },
            "/0472e2fd4feaa0108783c2f0e59307535fab1abd.css": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/0472e2fd4feaa0108783c2f0e59307535fab1abd.css"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/0472e2fd4feaa0108783c2f0e59307535fab1abd.map"
                },
                "type": {
                  "type": "constant",
                  "value": "css"
                }
              }
            },
            "/0472e2fd4feaa0108783c2f0e59307535fab1abd.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/0472e2fd4feaa0108783c2f0e59307535fab1abd.css.map"
                }
              }
            },
            "/packages/velocity_html-reporter/lib/velocity_logo.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter/lib/velocity_logo.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/velocity_html-reporter/lib/velocity_cog.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter/lib/velocity_cog.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/velocity_html-reporter/lib/icon-time.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter/lib/icon-time.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/apple-touch-icon-precomposed.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/apple-touch-icon-precomposed.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/favicon.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/favicon.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/font/OpenSans-Light-webfont.eot": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/font/OpenSans-Light-webfont.eot"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/font/OpenSans-Light-webfont.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/font/OpenSans-Light-webfont.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/font/OpenSans-Light-webfont.ttf": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/font/OpenSans-Light-webfont.ttf"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/font/OpenSans-Light-webfont.woff": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/font/OpenSans-Light-webfont.woff"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/font/OpenSans-Regular-webfont.eot": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/font/OpenSans-Regular-webfont.eot"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/font/OpenSans-Regular-webfont.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/font/OpenSans-Regular-webfont.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/font/OpenSans-Regular-webfont.ttf": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/font/OpenSans-Regular-webfont.ttf"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/font/OpenSans-Regular-webfont.woff": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/font/OpenSans-Regular-webfont.woff"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/icon/todos.eot": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/icon/todos.eot"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/icon/todos.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/icon/todos.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/icon/todos.ttf": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/icon/todos.ttf"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/icon/todos.woff": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/icon/todos.woff"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/img/logo-todos.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.browser/app/img/logo-todos.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "manifest.json": {
              "type": "object",
              "members": {
                "content": {
                  "type": "constant",
                  "value": "{\"manifest\":[{\"path\":\"packages/underscore.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/underscore.js?0a80a8623e1b40b5df5a05582f288ddd586eaa18\",\"sourceMap\":\"packages/underscore.js.map\",\"sourceMapUrl\":\"/packages/0a80a8623e1b40b5df5a05582f288ddd586eaa18.map\",\"size\":150686,\"hash\":\"0a80a8623e1b40b5df5a05582f288ddd586eaa18\"},{\"path\":\"packages/meteor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/meteor.js?81e2f06cff198adaa81b3bc09fc4f3728b7370ec\",\"sourceMap\":\"packages/meteor.js.map\",\"sourceMapUrl\":\"/packages/81e2f06cff198adaa81b3bc09fc4f3728b7370ec.map\",\"size\":109437,\"hash\":\"81e2f06cff198adaa81b3bc09fc4f3728b7370ec\"},{\"path\":\"packages/json.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/json.js?e22856eae714c681199eabc5c0710b904b125554\",\"sourceMap\":\"packages/json.js.map\",\"sourceMapUrl\":\"/packages/e22856eae714c681199eabc5c0710b904b125554.map\",\"size\":58343,\"hash\":\"e22856eae714c681199eabc5c0710b904b125554\"},{\"path\":\"packages/base64.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/base64.js?1a63019243b73298e2964e6d4680f25bca657726\",\"sourceMap\":\"packages/base64.js.map\",\"sourceMapUrl\":\"/packages/1a63019243b73298e2964e6d4680f25bca657726.map\",\"size\":15685,\"hash\":\"1a63019243b73298e2964e6d4680f25bca657726\"},{\"path\":\"packages/ejson.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ejson.js?71047b64b5196348bdbe5fd5eea9ac97a5a9eb14\",\"sourceMap\":\"packages/ejson.js.map\",\"sourceMapUrl\":\"/packages/71047b64b5196348bdbe5fd5eea9ac97a5a9eb14.map\",\"size\":81471,\"hash\":\"71047b64b5196348bdbe5fd5eea9ac97a5a9eb14\"},{\"path\":\"packages/logging.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/logging.js?07e201b648f16be8435a4f666156995eeda0c750\",\"sourceMap\":\"packages/logging.js.map\",\"sourceMapUrl\":\"/packages/07e201b648f16be8435a4f666156995eeda0c750.map\",\"size\":27996,\"hash\":\"07e201b648f16be8435a4f666156995eeda0c750\"},{\"path\":\"packages/reload.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/reload.js?da8974b7231dd8c0caccb5f322dcf97329d486d1\",\"sourceMap\":\"packages/reload.js.map\",\"sourceMapUrl\":\"/packages/da8974b7231dd8c0caccb5f322dcf97329d486d1.map\",\"size\":25926,\"hash\":\"da8974b7231dd8c0caccb5f322dcf97329d486d1\"},{\"path\":\"packages/tracker.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/tracker.js?517c8fe8ed6408951a30941e64a5383a7174bcfa\",\"sourceMap\":\"packages/tracker.js.map\",\"sourceMapUrl\":\"/packages/517c8fe8ed6408951a30941e64a5383a7174bcfa.map\",\"size\":68185,\"hash\":\"517c8fe8ed6408951a30941e64a5383a7174bcfa\"},{\"path\":\"packages/random.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/random.js?fe7b46080c91ce482acf6fc326afbc5b176f0502\",\"sourceMap\":\"packages/random.js.map\",\"sourceMapUrl\":\"/packages/fe7b46080c91ce482acf6fc326afbc5b176f0502.map\",\"size\":24099,\"hash\":\"fe7b46080c91ce482acf6fc326afbc5b176f0502\"},{\"path\":\"packages/retry.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/retry.js?1f1dd2c35d300110fdaba51ce4473583bc3bf031\",\"sourceMap\":\"packages/retry.js.map\",\"sourceMapUrl\":\"/packages/1f1dd2c35d300110fdaba51ce4473583bc3bf031.map\",\"size\":7245,\"hash\":\"1f1dd2c35d300110fdaba51ce4473583bc3bf031\"},{\"path\":\"packages/check.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/check.js?ac81167b8513b85b926c167bba423981b0c4cf9c\",\"sourceMap\":\"packages/check.js.map\",\"sourceMapUrl\":\"/packages/ac81167b8513b85b926c167bba423981b0c4cf9c.map\",\"size\":35647,\"hash\":\"ac81167b8513b85b926c167bba423981b0c4cf9c\"},{\"path\":\"packages/id-map.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/id-map.js?9ea6eaae8d74693ce2505a858d9a5e60cf191298\",\"sourceMap\":\"packages/id-map.js.map\",\"sourceMapUrl\":\"/packages/9ea6eaae8d74693ce2505a858d9a5e60cf191298.map\",\"size\":8584,\"hash\":\"9ea6eaae8d74693ce2505a858d9a5e60cf191298\"},{\"path\":\"packages/ordered-dict.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ordered-dict.js?bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37\",\"sourceMap\":\"packages/ordered-dict.js.map\",\"sourceMapUrl\":\"/packages/bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37.map\",\"size\":20395,\"hash\":\"bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37\"},{\"path\":\"packages/geojson-utils.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/geojson-utils.js?81b79d5cf96d00b4b7a28987debcffb665c17526\",\"sourceMap\":\"packages/geojson-utils.js.map\",\"sourceMapUrl\":\"/packages/81b79d5cf96d00b4b7a28987debcffb665c17526.map\",\"size\":48339,\"hash\":\"81b79d5cf96d00b4b7a28987debcffb665c17526\"},{\"path\":\"packages/minimongo.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/minimongo.js?e8806aa7782b729b2517ebc0cd10b321667f1427\",\"sourceMap\":\"packages/minimongo.js.map\",\"sourceMapUrl\":\"/packages/e8806aa7782b729b2517ebc0cd10b321667f1427.map\",\"size\":455881,\"hash\":\"e8806aa7782b729b2517ebc0cd10b321667f1427\"},{\"path\":\"packages/ddp.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ddp.js?41b62dcceb3ce0de6ca79c6aed088cccde6a44d8\",\"sourceMap\":\"packages/ddp.js.map\",\"sourceMapUrl\":\"/packages/41b62dcceb3ce0de6ca79c6aed088cccde6a44d8.map\",\"size\":617153,\"hash\":\"41b62dcceb3ce0de6ca79c6aed088cccde6a44d8\"},{\"path\":\"packages/follower-livedata.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/follower-livedata.js?74156c6baa89da861fc4ddb58ef158eac71e58e0\",\"sourceMap\":\"packages/follower-livedata.js.map\",\"sourceMapUrl\":\"/packages/74156c6baa89da861fc4ddb58ef158eac71e58e0.map\",\"size\":1490,\"hash\":\"74156c6baa89da861fc4ddb58ef158eac71e58e0\"},{\"path\":\"packages/application-configuration.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/application-configuration.js?dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f\",\"sourceMap\":\"packages/application-configuration.js.map\",\"sourceMapUrl\":\"/packages/dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f.map\",\"size\":1485,\"hash\":\"dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f\"},{\"path\":\"packages/insecure.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/insecure.js?3dc9d4a2dad55999b5b15a447d57f3d5fb66b290\",\"sourceMap\":\"packages/insecure.js.map\",\"sourceMapUrl\":\"/packages/3dc9d4a2dad55999b5b15a447d57f3d5fb66b290.map\",\"size\":1290,\"hash\":\"3dc9d4a2dad55999b5b15a447d57f3d5fb66b290\"},{\"path\":\"packages/mongo.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/mongo.js?052f30e968644b2b39a96605ffee73a7684ff37b\",\"sourceMap\":\"packages/mongo.js.map\",\"sourceMapUrl\":\"/packages/052f30e968644b2b39a96605ffee73a7684ff37b.map\",\"size\":147662,\"hash\":\"052f30e968644b2b39a96605ffee73a7684ff37b\"},{\"path\":\"packages/autoupdate.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/autoupdate.js?9a5ea03bf057815385bf569c7acc2c285c005491\",\"sourceMap\":\"packages/autoupdate.js.map\",\"sourceMapUrl\":\"/packages/9a5ea03bf057815385bf569c7acc2c285c005491.map\",\"size\":17152,\"hash\":\"9a5ea03bf057815385bf569c7acc2c285c005491\"},{\"path\":\"packages/meteor-platform.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/meteor-platform.js?499a2f8522e25820b1153c69a92751ccaae507b3\",\"sourceMap\":\"packages/meteor-platform.js.map\",\"sourceMapUrl\":\"/packages/499a2f8522e25820b1153c69a92751ccaae507b3.map\",\"size\":1384,\"hash\":\"499a2f8522e25820b1153c69a92751ccaae507b3\"},{\"path\":\"packages/less.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/less.js?7d1bf981a25a449d6270558bcfc983313c40cd26\",\"sourceMap\":\"packages/less.js.map\",\"sourceMapUrl\":\"/packages/7d1bf981a25a449d6270558bcfc983313c40cd26.map\",\"size\":1286,\"hash\":\"7d1bf981a25a449d6270558bcfc983313c40cd26\"},{\"path\":\"packages/reactive-dict.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/reactive-dict.js?6b25309b1f0dcf775b44984324878d6f8ad1abc2\",\"sourceMap\":\"packages/reactive-dict.js.map\",\"sourceMapUrl\":\"/packages/6b25309b1f0dcf775b44984324878d6f8ad1abc2.map\",\"size\":19802,\"hash\":\"6b25309b1f0dcf775b44984324878d6f8ad1abc2\"},{\"path\":\"packages/deps.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/deps.js?504589e1e9585dec8f9f6094e5a87b22de3783a1\",\"sourceMap\":\"packages/deps.js.map\",\"sourceMapUrl\":\"/packages/504589e1e9585dec8f9f6094e5a87b22de3783a1.map\",\"size\":1442,\"hash\":\"504589e1e9585dec8f9f6094e5a87b22de3783a1\"},{\"path\":\"packages/jquery.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/jquery.js?dd8bac56f8fd3666d433d2285ae01e52597cc51a\",\"sourceMap\":\"packages/jquery.js.map\",\"sourceMapUrl\":\"/packages/dd8bac56f8fd3666d433d2285ae01e52597cc51a.map\",\"size\":1296513,\"hash\":\"dd8bac56f8fd3666d433d2285ae01e52597cc51a\"},{\"path\":\"packages/htmljs.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/htmljs.js?567eb96d5d22631c03d6aca6afa4c42f0d1295f2\",\"sourceMap\":\"packages/htmljs.js.map\",\"sourceMapUrl\":\"/packages/567eb96d5d22631c03d6aca6afa4c42f0d1295f2.map\",\"size\":60161,\"hash\":\"567eb96d5d22631c03d6aca6afa4c42f0d1295f2\"},{\"path\":\"packages/observe-sequence.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/observe-sequence.js?2fd807ea171ead273b9e6458607cb226012d9240\",\"sourceMap\":\"packages/observe-sequence.js.map\",\"sourceMapUrl\":\"/packages/2fd807ea171ead273b9e6458607cb226012d9240.map\",\"size\":30271,\"hash\":\"2fd807ea171ead273b9e6458607cb226012d9240\"},{\"path\":\"packages/reactive-var.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/reactive-var.js?20335b7b37165980ddd9f23943b2e5b00aae1cc2\",\"sourceMap\":\"packages/reactive-var.js.map\",\"sourceMapUrl\":\"/packages/20335b7b37165980ddd9f23943b2e5b00aae1cc2.map\",\"size\":13963,\"hash\":\"20335b7b37165980ddd9f23943b2e5b00aae1cc2\"},{\"path\":\"packages/blaze.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/blaze.js?efa68f65e67544b5a05509804bf97e2c91ce75eb\",\"sourceMap\":\"packages/blaze.js.map\",\"sourceMapUrl\":\"/packages/efa68f65e67544b5a05509804bf97e2c91ce75eb.map\",\"size\":391530,\"hash\":\"efa68f65e67544b5a05509804bf97e2c91ce75eb\"},{\"path\":\"packages/templating.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/templating.js?599ba307216da826d8b335332ebcc9a497a369a0\",\"sourceMap\":\"packages/templating.js.map\",\"sourceMapUrl\":\"/packages/599ba307216da826d8b335332ebcc9a497a369a0.map\",\"size\":11910,\"hash\":\"599ba307216da826d8b335332ebcc9a497a369a0\"},{\"path\":\"packages/iron_core.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_core.js?fe41a023a7a6f1ded90b0729437928a8ddccc7d4\",\"sourceMap\":\"packages/iron_core.js.map\",\"sourceMapUrl\":\"/packages/fe41a023a7a6f1ded90b0729437928a8ddccc7d4.map\",\"size\":31679,\"hash\":\"fe41a023a7a6f1ded90b0729437928a8ddccc7d4\"},{\"path\":\"packages/ui.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ui.js?5a663333fd30f8fd913f110e0ef779e84f67c4b8\",\"sourceMap\":\"packages/ui.js.map\",\"sourceMapUrl\":\"/packages/5a663333fd30f8fd913f110e0ef779e84f67c4b8.map\",\"size\":1529,\"hash\":\"5a663333fd30f8fd913f110e0ef779e84f67c4b8\"},{\"path\":\"packages/iron_dynamic-template.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_dynamic-template.js?32038885cb1dad7957291ffebfffcb7f8cd57d20\",\"sourceMap\":\"packages/iron_dynamic-template.js.map\",\"sourceMapUrl\":\"/packages/32038885cb1dad7957291ffebfffcb7f8cd57d20.map\",\"size\":51775,\"hash\":\"32038885cb1dad7957291ffebfffcb7f8cd57d20\"},{\"path\":\"packages/iron_layout.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_layout.js?080dc95e770e3130757bf6af69fd0abb99573ae4\",\"sourceMap\":\"packages/iron_layout.js.map\",\"sourceMapUrl\":\"/packages/080dc95e770e3130757bf6af69fd0abb99573ae4.map\",\"size\":56973,\"hash\":\"080dc95e770e3130757bf6af69fd0abb99573ae4\"},{\"path\":\"packages/iron_router.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_router.js?da7f2ac81c3fd9daebf49ce9a6980a54caa1dc17\",\"sourceMap\":\"packages/iron_router.js.map\",\"sourceMapUrl\":\"/packages/da7f2ac81c3fd9daebf49ce9a6980a54caa1dc17.map\",\"size\":250621,\"hash\":\"da7f2ac81c3fd9daebf49ce9a6980a54caa1dc17\"},{\"path\":\"packages/localstorage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/localstorage.js?9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c\",\"sourceMap\":\"packages/localstorage.js.map\",\"sourceMapUrl\":\"/packages/9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c.map\",\"size\":7092,\"hash\":\"9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c\"},{\"path\":\"packages/accounts-base.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/accounts-base.js?88bb0577cebfbd40b522bb337f8ff8af92244c2f\",\"sourceMap\":\"packages/accounts-base.js.map\",\"sourceMapUrl\":\"/packages/88bb0577cebfbd40b522bb337f8ff8af92244c2f.map\",\"size\":109093,\"hash\":\"88bb0577cebfbd40b522bb337f8ff8af92244c2f\"},{\"path\":\"packages/sha.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/sha.js?65ef52f7221944768bfc2049d6b7e163c8ae2615\",\"sourceMap\":\"packages/sha.js.map\",\"sourceMapUrl\":\"/packages/65ef52f7221944768bfc2049d6b7e163c8ae2615.map\",\"size\":19584,\"hash\":\"65ef52f7221944768bfc2049d6b7e163c8ae2615\"},{\"path\":\"packages/srp.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/srp.js?e2e28156e8c912d504a3586351c8a1119f664cfd\",\"sourceMap\":\"packages/srp.js.map\",\"sourceMapUrl\":\"/packages/e2e28156e8c912d504a3586351c8a1119f664cfd.map\",\"size\":173470,\"hash\":\"e2e28156e8c912d504a3586351c8a1119f664cfd\"},{\"path\":\"packages/accounts-password.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/accounts-password.js?3845cc71ad2dc1378b7d8cc4164a78359506dd40\",\"sourceMap\":\"packages/accounts-password.js.map\",\"sourceMapUrl\":\"/packages/3845cc71ad2dc1378b7d8cc4164a78359506dd40.map\",\"size\":33170,\"hash\":\"3845cc71ad2dc1378b7d8cc4164a78359506dd40\"},{\"path\":\"packages/velocity_core.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_core.js?cecf2443254038195518d507d5fe0ecdc5dce435\",\"sourceMap\":\"packages/velocity_core.js.map\",\"sourceMapUrl\":\"/packages/cecf2443254038195518d507d5fe0ecdc5dce435.map\",\"size\":12238,\"hash\":\"cecf2443254038195518d507d5fe0ecdc5dce435\"},{\"path\":\"packages/amplify.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/amplify.js?0943ecb804169b991257a319fa92b9e6f34e2d1b\",\"sourceMap\":\"packages/amplify.js.map\",\"sourceMapUrl\":\"/packages/0943ecb804169b991257a319fa92b9e6f34e2d1b.map\",\"size\":88428,\"hash\":\"0943ecb804169b991257a319fa92b9e6f34e2d1b\"},{\"path\":\"packages/velocity_html-reporter.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_html-reporter.js?a615bf3410d795106d7a78c6a94379745879f7df\",\"sourceMap\":\"packages/velocity_html-reporter.js.map\",\"sourceMapUrl\":\"/packages/a615bf3410d795106d7a78c6a94379745879f7df.map\",\"size\":90264,\"hash\":\"a615bf3410d795106d7a78c6a94379745879f7df\"},{\"path\":\"packages/velocity_shim.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_shim.js?14363d085a412115605c41536e4f2867425b89d5\",\"sourceMap\":\"packages/velocity_shim.js.map\",\"sourceMapUrl\":\"/packages/14363d085a412115605c41536e4f2867425b89d5.map\",\"size\":2905,\"hash\":\"14363d085a412115605c41536e4f2867425b89d5\"},{\"path\":\"packages/mike_mocha.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/mike_mocha.js?81e347a16dc440779b8caa4163b6179df74c6bfc\",\"sourceMap\":\"packages/mike_mocha.js.map\",\"sourceMapUrl\":\"/packages/81e347a16dc440779b8caa4163b6179df74c6bfc.map\",\"size\":1347056,\"hash\":\"81e347a16dc440779b8caa4163b6179df74c6bfc\"},{\"path\":\"packages/coffeescript.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/coffeescript.js?969f68786bbc68e6cad299e74922a53af3d1404b\",\"sourceMap\":\"packages/coffeescript.js.map\",\"sourceMapUrl\":\"/packages/969f68786bbc68e6cad299e74922a53af3d1404b.map\",\"size\":1294,\"hash\":\"969f68786bbc68e6cad299e74922a53af3d1404b\"},{\"path\":\"packages/practicalmeteor_chai.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/practicalmeteor_chai.js?7fbbbec9a13f4adf082b394c5ddd7230d84afc48\",\"sourceMap\":\"packages/practicalmeteor_chai.js.map\",\"sourceMapUrl\":\"/packages/7fbbbec9a13f4adf082b394c5ddd7230d84afc48.map\",\"size\":570118,\"hash\":\"7fbbbec9a13f4adf082b394c5ddd7230d84afc48\"},{\"path\":\"packages/practicalmeteor_loglevel.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/practicalmeteor_loglevel.js?9185331dfa11fd235edfbef93838d4ca3244d638\",\"sourceMap\":\"packages/practicalmeteor_loglevel.js.map\",\"sourceMapUrl\":\"/packages/9185331dfa11fd235edfbef93838d4ca3244d638.map\",\"size\":28719,\"hash\":\"9185331dfa11fd235edfbef93838d4ca3244d638\"},{\"path\":\"packages/sanjo_jasmine.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/sanjo_jasmine.js?6c8e0ce3908e66d0de626b7c10139a1ad3351d76\",\"sourceMap\":\"packages/sanjo_jasmine.js.map\",\"sourceMapUrl\":\"/packages/6c8e0ce3908e66d0de626b7c10139a1ad3351d76.map\",\"size\":537001,\"hash\":\"6c8e0ce3908e66d0de626b7c10139a1ad3351d76\"},{\"path\":\"packages/webapp.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/webapp.js?e1be090051b82f046484dccc2de7d747e50c7328\",\"sourceMap\":\"packages/webapp.js.map\",\"sourceMapUrl\":\"/packages/e1be090051b82f046484dccc2de7d747e50c7328.map\",\"size\":3106,\"hash\":\"e1be090051b82f046484dccc2de7d747e50c7328\"},{\"path\":\"packages/session.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/session.js?e436deefadc999c21b6fd16e8e1ecce55c3c3a55\",\"sourceMap\":\"packages/session.js.map\",\"sourceMapUrl\":\"/packages/e436deefadc999c21b6fd16e8e1ecce55c3c3a55.map\",\"size\":6497,\"hash\":\"e436deefadc999c21b6fd16e8e1ecce55c3c3a55\"},{\"path\":\"packages/livedata.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/livedata.js?718526445deb4d9baacb6d92c551adea1d36c1e1\",\"sourceMap\":\"packages/livedata.js.map\",\"sourceMapUrl\":\"/packages/718526445deb4d9baacb6d92c551adea1d36c1e1.map\",\"size\":1413,\"hash\":\"718526445deb4d9baacb6d92c551adea1d36c1e1\"},{\"path\":\"packages/spacebars.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/spacebars.js?7f53771c84a2eafac2b561c9796dda0d8af8e7f5\",\"sourceMap\":\"packages/spacebars.js.map\",\"sourceMapUrl\":\"/packages/7f53771c84a2eafac2b561c9796dda0d8af8e7f5.map\",\"size\":42206,\"hash\":\"7f53771c84a2eafac2b561c9796dda0d8af8e7f5\"},{\"path\":\"packages/launch-screen.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/launch-screen.js?13e1092ebecdb7208762500188f1dc2dea5603e9\",\"sourceMap\":\"packages/launch-screen.js.map\",\"sourceMapUrl\":\"/packages/13e1092ebecdb7208762500188f1dc2dea5603e9.map\",\"size\":9707,\"hash\":\"13e1092ebecdb7208762500188f1dc2dea5603e9\"},{\"path\":\"packages/global-imports.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/global-imports.js?3ef01ba2acedfaec5b8e793a7e4864028f596e55\",\"size\":952,\"hash\":\"3ef01ba2acedfaec5b8e793a7e4864028f596e55\"},{\"path\":\"app/client/templates/template.app-body.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/template.app-body.js?392d4c54a4dfc1c22a40e2b868f0199c0103f925\",\"size\":4717,\"hash\":\"392d4c54a4dfc1c22a40e2b868f0199c0103f925\"},{\"path\":\"app/client/templates/template.app-not-found.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/template.app-not-found.js?84851b39b7a025eace6bb618db892324ea0dd0d2\",\"size\":597,\"hash\":\"84851b39b7a025eace6bb618db892324ea0dd0d2\"},{\"path\":\"app/client/templates/template.auth-join.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/template.auth-join.js?5b9ffb0f618696bf3e72f652c7eca4abb8c5a991\",\"size\":2924,\"hash\":\"5b9ffb0f618696bf3e72f652c7eca4abb8c5a991\"},{\"path\":\"app/client/templates/template.auth-signin.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/template.auth-signin.js?dbd742ebf1462704e7faeaa09448298071baa2f6\",\"size\":2525,\"hash\":\"dbd742ebf1462704e7faeaa09448298071baa2f6\"},{\"path\":\"app/client/templates/template.lists-show.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/template.lists-show.js?6910668bca276897de174aa181ef65a3964c4607\",\"size\":5336,\"hash\":\"6910668bca276897de174aa181ef65a3964c4607\"},{\"path\":\"app/client/templates/template.loading.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/template.loading.js?3388a0e0a34e6ef0bcb0df47793189675f371917\",\"size\":229,\"hash\":\"3388a0e0a34e6ef0bcb0df47793189675f371917\"},{\"path\":\"app/client/templates/template.todos-item.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/template.todos-item.js?a704843a2161d902254f16a284e434e5d1df3ab2\",\"size\":933,\"hash\":\"a704843a2161d902254f16a284e434e5d1df3ab2\"},{\"path\":\"app/client/lib/jquery.touchwipe.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/lib/jquery.touchwipe.js?c61a2a45015cc89ed99746123444f9c4e427286f\",\"size\":2292,\"hash\":\"c61a2a45015cc89ed99746123444f9c4e427286f\"},{\"path\":\"app/lib/collections.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/collections.js?07711601078c9c3a9c90bfb622a23184713abd80\",\"size\":484,\"hash\":\"07711601078c9c3a9c90bfb622a23184713abd80\"},{\"path\":\"app/lib/router.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/router.js?e7039932e76523ca27eccf98688e4b32d4f604e6\",\"size\":1742,\"hash\":\"e7039932e76523ca27eccf98688e4b32d4f604e6\"},{\"path\":\"app/client/templates/app-body.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/app-body.js?04569da6e129b5b5adcd029a53c5d0da40ac2fac\",\"size\":3442,\"hash\":\"04569da6e129b5b5adcd029a53c5d0da40ac2fac\"},{\"path\":\"app/client/templates/auth-join.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/auth-join.js?8a6c2d95dd0d8a09bee9aae6a546583ccd8353ef\",\"size\":1149,\"hash\":\"8a6c2d95dd0d8a09bee9aae6a546583ccd8353ef\"},{\"path\":\"app/client/templates/auth-signin.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/auth-signin.js?fc9708b6b0ea077ececf15fdcbd169bac5a5ca9e\",\"size\":984,\"hash\":\"fc9708b6b0ea077ececf15fdcbd169bac5a5ca9e\"},{\"path\":\"app/client/templates/lists-show.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/lists-show.js?dbeb00e56db518b4dc3e8fd741b3d219950772f7\",\"size\":4535,\"hash\":\"dbeb00e56db518b4dc3e8fd741b3d219950772f7\"},{\"path\":\"app/client/templates/todos-item.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/todos-item.js?fc9172f2c72e6974bec3be18f90788d37ca2e832\",\"size\":1580,\"hash\":\"fc9172f2c72e6974bec3be18f90788d37ca2e832\"},{\"path\":\"packages/service-configuration.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/service-configuration.js?262da6fb1e9c97be84333c429c9a2929c80f8e3b\",\"sourceMap\":\"packages/service-configuration.js.map\",\"sourceMapUrl\":\"/packages/262da6fb1e9c97be84333c429c9a2929c80f8e3b.map\",\"size\":5082,\"hash\":\"262da6fb1e9c97be84333c429c9a2929c80f8e3b\"},{\"path\":\"packages/velocity_test-proxy.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_test-proxy.js?d6f609666eb2d7e3562b88fc6612d26a3066f5b4\",\"sourceMap\":\"packages/velocity_test-proxy.js.map\",\"sourceMapUrl\":\"/packages/d6f609666eb2d7e3562b88fc6612d26a3066f5b4.map\",\"size\":14223,\"hash\":\"d6f609666eb2d7e3562b88fc6612d26a3066f5b4\"},{\"path\":\"packages/velocity_node-soft-mirror.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_node-soft-mirror.js?acf27a727fa9aa2f29f237ade3b2046fb9890e36\",\"sourceMap\":\"packages/velocity_node-soft-mirror.js.map\",\"sourceMapUrl\":\"/packages/acf27a727fa9aa2f29f237ade3b2046fb9890e36.map\",\"size\":11067,\"hash\":\"acf27a727fa9aa2f29f237ade3b2046fb9890e36\"},{\"path\":\"0472e2fd4feaa0108783c2f0e59307535fab1abd.css\",\"where\":\"client\",\"type\":\"css\",\"cacheable\":true,\"url\":\"/0472e2fd4feaa0108783c2f0e59307535fab1abd.css\",\"sourceMap\":\"0472e2fd4feaa0108783c2f0e59307535fab1abd.css.map\",\"sourceMapUrl\":\"/0472e2fd4feaa0108783c2f0e59307535fab1abd.map\",\"size\":42058,\"hash\":\"0472e2fd4feaa0108783c2f0e59307535fab1abd\"},{\"path\":\"packages/velocity_html-reporter/lib/velocity_logo.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/velocity_html-reporter/lib/velocity_logo.svg\",\"size\":3723,\"hash\":\"bd19ecdc8eb1084f7bb562c298e4ce41f9cdc698\"},{\"path\":\"packages/velocity_html-reporter/lib/velocity_cog.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/velocity_html-reporter/lib/velocity_cog.svg\",\"size\":987,\"hash\":\"6e74acfffcbd2bafdc8a95d9db7762ece07b1e81\"},{\"path\":\"packages/velocity_html-reporter/lib/icon-time.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/velocity_html-reporter/lib/icon-time.png\",\"size\":2834,\"hash\":\"868f492022a4dab0f1522de6aae0773531bc6e85\"},{\"path\":\"app/apple-touch-icon-precomposed.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/apple-touch-icon-precomposed.png\",\"size\":2222,\"hash\":\"9d9e446418108c4fa02acbfc496ca2dd45db90fc\"},{\"path\":\"app/favicon.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/favicon.png\",\"size\":1490,\"hash\":\"48fc4f8b1972842c8023a0cf2f8faf64d05ff922\"},{\"path\":\"app/font/OpenSans-Light-webfont.eot\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/font/OpenSans-Light-webfont.eot\",\"size\":29794,\"hash\":\"ed68cada8c4bfa00683942d9c87bf3cc34666522\"},{\"path\":\"app/font/OpenSans-Light-webfont.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/font/OpenSans-Light-webfont.svg\",\"size\":56447,\"hash\":\"6f25974f01d4ee1355ac2bc406f7c12773b31077\"},{\"path\":\"app/font/OpenSans-Light-webfont.ttf\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/font/OpenSans-Light-webfont.ttf\",\"size\":29612,\"hash\":\"d92b1bee5c22a1647396e951549f9771c6591fb4\"},{\"path\":\"app/font/OpenSans-Light-webfont.woff\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/font/OpenSans-Light-webfont.woff\",\"size\":19396,\"hash\":\"2cf63379bcba2127662f7bedb01ed0f7b82dcf0a\"},{\"path\":\"app/font/OpenSans-Regular-webfont.eot\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/font/OpenSans-Regular-webfont.eot\",\"size\":29934,\"hash\":\"c7ac4f61bc716a94362fbda76f5784ed3a17b61c\"},{\"path\":\"app/font/OpenSans-Regular-webfont.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/font/OpenSans-Regular-webfont.svg\",\"size\":58495,\"hash\":\"61e2d9bace6b84c487668d196e628fca6a561245\"},{\"path\":\"app/font/OpenSans-Regular-webfont.ttf\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/font/OpenSans-Regular-webfont.ttf\",\"size\":29744,\"hash\":\"1bda9f65b10d2b75b5b8049cd9107e6109112d7d\"},{\"path\":\"app/font/OpenSans-Regular-webfont.woff\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/font/OpenSans-Regular-webfont.woff\",\"size\":19624,\"hash\":\"4e9fe179bbb4c898b4658ca4801e82d82c2f71cd\"},{\"path\":\"app/icon/todos.eot\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/icon/todos.eot\",\"size\":6000,\"hash\":\"00b12bc24c938d690cf4f3d3013f8da6daec6f2b\"},{\"path\":\"app/icon/todos.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/icon/todos.svg\",\"size\":17411,\"hash\":\"491b131a51a16f86fb689ddea516c04735db824d\"},{\"path\":\"app/icon/todos.ttf\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/icon/todos.ttf\",\"size\":5844,\"hash\":\"b6c33e34f594d10609e9eab7f072be3ad325d863\"},{\"path\":\"app/icon/todos.woff\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/icon/todos.woff\",\"size\":5920,\"hash\":\"74d722b324c90b1b1632cdb13db9a62baac68aaf\"},{\"path\":\"app/img/logo-todos.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/img/logo-todos.svg\",\"size\":4066,\"hash\":\"f09205164c463c61a7d0f075cf2f04fdf5c5d895\"},{\"path\":\"head.html\",\"where\":\"internal\",\"type\":\"head\",\"hash\":\"7f9aef28d8968765436be6f5aa5d2f43f36a6b2e\"}],\"version\":\"505aa27e7f40dcea58f1f9dba8fbde83ed029948\"}"
                },
                "type": {
                  "type": "constant",
                  "value": "json"
                }
              }
            },
            "/__cordova/packages/underscore.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/underscore.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/0a80a8623e1b40b5df5a05582f288ddd586eaa18.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/0a80a8623e1b40b5df5a05582f288ddd586eaa18.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/underscore.js.map"
                }
              }
            },
            "/__cordova/packages/meteor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/meteor.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/2c2b8b1d565ce777fa1023c8fe53084b94f0c8c6.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/2c2b8b1d565ce777fa1023c8fe53084b94f0c8c6.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/meteor.js.map"
                }
              }
            },
            "/__cordova/packages/json.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/json.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e22856eae714c681199eabc5c0710b904b125554.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/e22856eae714c681199eabc5c0710b904b125554.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/json.js.map"
                }
              }
            },
            "/__cordova/packages/base64.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/base64.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/1a63019243b73298e2964e6d4680f25bca657726.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/1a63019243b73298e2964e6d4680f25bca657726.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/base64.js.map"
                }
              }
            },
            "/__cordova/packages/ejson.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/ejson.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/71047b64b5196348bdbe5fd5eea9ac97a5a9eb14.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/71047b64b5196348bdbe5fd5eea9ac97a5a9eb14.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/ejson.js.map"
                }
              }
            },
            "/__cordova/packages/logging.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/logging.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/efbe67566211d95b5cc8e39ab2faae771509b7ce.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/efbe67566211d95b5cc8e39ab2faae771509b7ce.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/logging.js.map"
                }
              }
            },
            "/__cordova/packages/reload.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/reload.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/da8974b7231dd8c0caccb5f322dcf97329d486d1.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/da8974b7231dd8c0caccb5f322dcf97329d486d1.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/reload.js.map"
                }
              }
            },
            "/__cordova/packages/tracker.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/tracker.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/517c8fe8ed6408951a30941e64a5383a7174bcfa.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/517c8fe8ed6408951a30941e64a5383a7174bcfa.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/tracker.js.map"
                }
              }
            },
            "/__cordova/packages/random.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/random.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/fe7b46080c91ce482acf6fc326afbc5b176f0502.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/fe7b46080c91ce482acf6fc326afbc5b176f0502.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/random.js.map"
                }
              }
            },
            "/__cordova/packages/retry.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/retry.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/1f1dd2c35d300110fdaba51ce4473583bc3bf031.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/1f1dd2c35d300110fdaba51ce4473583bc3bf031.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/retry.js.map"
                }
              }
            },
            "/__cordova/packages/check.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/check.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/ac81167b8513b85b926c167bba423981b0c4cf9c.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/ac81167b8513b85b926c167bba423981b0c4cf9c.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/check.js.map"
                }
              }
            },
            "/__cordova/packages/id-map.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/id-map.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9ea6eaae8d74693ce2505a858d9a5e60cf191298.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/9ea6eaae8d74693ce2505a858d9a5e60cf191298.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/id-map.js.map"
                }
              }
            },
            "/__cordova/packages/ordered-dict.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/ordered-dict.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/ordered-dict.js.map"
                }
              }
            },
            "/__cordova/packages/geojson-utils.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/geojson-utils.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/81b79d5cf96d00b4b7a28987debcffb665c17526.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/81b79d5cf96d00b4b7a28987debcffb665c17526.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/geojson-utils.js.map"
                }
              }
            },
            "/__cordova/packages/minimongo.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/minimongo.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e8806aa7782b729b2517ebc0cd10b321667f1427.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/e8806aa7782b729b2517ebc0cd10b321667f1427.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/minimongo.js.map"
                }
              }
            },
            "/__cordova/packages/ddp.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/ddp.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/41b62dcceb3ce0de6ca79c6aed088cccde6a44d8.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/41b62dcceb3ce0de6ca79c6aed088cccde6a44d8.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/ddp.js.map"
                }
              }
            },
            "/__cordova/packages/follower-livedata.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/follower-livedata.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/74156c6baa89da861fc4ddb58ef158eac71e58e0.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/74156c6baa89da861fc4ddb58ef158eac71e58e0.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/follower-livedata.js.map"
                }
              }
            },
            "/__cordova/packages/application-configuration.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/application-configuration.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/application-configuration.js.map"
                }
              }
            },
            "/__cordova/packages/insecure.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/insecure.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/3dc9d4a2dad55999b5b15a447d57f3d5fb66b290.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/3dc9d4a2dad55999b5b15a447d57f3d5fb66b290.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/insecure.js.map"
                }
              }
            },
            "/__cordova/packages/mongo.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/mongo.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/052f30e968644b2b39a96605ffee73a7684ff37b.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/052f30e968644b2b39a96605ffee73a7684ff37b.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/mongo.js.map"
                }
              }
            },
            "/__cordova/packages/url.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/url.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/2312d739008b2ffa52f13c77c5d6fc59c9e17d56.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/2312d739008b2ffa52f13c77c5d6fc59c9e17d56.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/url.js.map"
                }
              }
            },
            "/__cordova/packages/http.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/http.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9c5d152169ba9a5a57b6b8ec28e64bbd0d308077.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/9c5d152169ba9a5a57b6b8ec28e64bbd0d308077.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/http.js.map"
                }
              }
            },
            "/__cordova/packages/autoupdate.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/autoupdate.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/83a587ebd1efacabc89a2dd08e85b48a00b1c696.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/83a587ebd1efacabc89a2dd08e85b48a00b1c696.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/autoupdate.js.map"
                }
              }
            },
            "/__cordova/packages/meteor-platform.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/meteor-platform.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/499a2f8522e25820b1153c69a92751ccaae507b3.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/499a2f8522e25820b1153c69a92751ccaae507b3.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/meteor-platform.js.map"
                }
              }
            },
            "/__cordova/packages/less.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/less.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/7d1bf981a25a449d6270558bcfc983313c40cd26.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/7d1bf981a25a449d6270558bcfc983313c40cd26.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/less.js.map"
                }
              }
            },
            "/__cordova/packages/reactive-dict.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/reactive-dict.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/6b25309b1f0dcf775b44984324878d6f8ad1abc2.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/6b25309b1f0dcf775b44984324878d6f8ad1abc2.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/reactive-dict.js.map"
                }
              }
            },
            "/__cordova/packages/deps.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/deps.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/504589e1e9585dec8f9f6094e5a87b22de3783a1.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/504589e1e9585dec8f9f6094e5a87b22de3783a1.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/deps.js.map"
                }
              }
            },
            "/__cordova/packages/jquery.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/jquery.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/dd8bac56f8fd3666d433d2285ae01e52597cc51a.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/dd8bac56f8fd3666d433d2285ae01e52597cc51a.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/jquery.js.map"
                }
              }
            },
            "/__cordova/packages/htmljs.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/htmljs.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/567eb96d5d22631c03d6aca6afa4c42f0d1295f2.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/567eb96d5d22631c03d6aca6afa4c42f0d1295f2.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/htmljs.js.map"
                }
              }
            },
            "/__cordova/packages/observe-sequence.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/observe-sequence.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/2fd807ea171ead273b9e6458607cb226012d9240.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/2fd807ea171ead273b9e6458607cb226012d9240.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/observe-sequence.js.map"
                }
              }
            },
            "/__cordova/packages/reactive-var.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/reactive-var.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/20335b7b37165980ddd9f23943b2e5b00aae1cc2.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/20335b7b37165980ddd9f23943b2e5b00aae1cc2.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/reactive-var.js.map"
                }
              }
            },
            "/__cordova/packages/blaze.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/blaze.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/efa68f65e67544b5a05509804bf97e2c91ce75eb.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/efa68f65e67544b5a05509804bf97e2c91ce75eb.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/blaze.js.map"
                }
              }
            },
            "/__cordova/packages/templating.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/templating.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/599ba307216da826d8b335332ebcc9a497a369a0.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/599ba307216da826d8b335332ebcc9a497a369a0.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/templating.js.map"
                }
              }
            },
            "/__cordova/packages/iron_core.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/iron_core.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/fe41a023a7a6f1ded90b0729437928a8ddccc7d4.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/fe41a023a7a6f1ded90b0729437928a8ddccc7d4.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/iron_core.js.map"
                }
              }
            },
            "/__cordova/packages/ui.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/ui.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/5a663333fd30f8fd913f110e0ef779e84f67c4b8.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/5a663333fd30f8fd913f110e0ef779e84f67c4b8.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/ui.js.map"
                }
              }
            },
            "/__cordova/packages/iron_dynamic-template.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/iron_dynamic-template.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/32038885cb1dad7957291ffebfffcb7f8cd57d20.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/32038885cb1dad7957291ffebfffcb7f8cd57d20.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/iron_dynamic-template.js.map"
                }
              }
            },
            "/__cordova/packages/iron_layout.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/iron_layout.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/080dc95e770e3130757bf6af69fd0abb99573ae4.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/080dc95e770e3130757bf6af69fd0abb99573ae4.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/iron_layout.js.map"
                }
              }
            },
            "/__cordova/packages/iron_router.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/iron_router.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/da7f2ac81c3fd9daebf49ce9a6980a54caa1dc17.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/da7f2ac81c3fd9daebf49ce9a6980a54caa1dc17.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/iron_router.js.map"
                }
              }
            },
            "/__cordova/packages/localstorage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/localstorage.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/localstorage.js.map"
                }
              }
            },
            "/__cordova/packages/accounts-base.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/accounts-base.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/88bb0577cebfbd40b522bb337f8ff8af92244c2f.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/88bb0577cebfbd40b522bb337f8ff8af92244c2f.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/accounts-base.js.map"
                }
              }
            },
            "/__cordova/packages/sha.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/sha.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/65ef52f7221944768bfc2049d6b7e163c8ae2615.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/65ef52f7221944768bfc2049d6b7e163c8ae2615.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/sha.js.map"
                }
              }
            },
            "/__cordova/packages/srp.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/srp.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e2e28156e8c912d504a3586351c8a1119f664cfd.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/e2e28156e8c912d504a3586351c8a1119f664cfd.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/srp.js.map"
                }
              }
            },
            "/__cordova/packages/accounts-password.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/accounts-password.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/3845cc71ad2dc1378b7d8cc4164a78359506dd40.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/3845cc71ad2dc1378b7d8cc4164a78359506dd40.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/accounts-password.js.map"
                }
              }
            },
            "/__cordova/packages/velocity_core.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/velocity_core.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/cecf2443254038195518d507d5fe0ecdc5dce435.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/cecf2443254038195518d507d5fe0ecdc5dce435.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/velocity_core.js.map"
                }
              }
            },
            "/__cordova/packages/amplify.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/amplify.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/0943ecb804169b991257a319fa92b9e6f34e2d1b.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/0943ecb804169b991257a319fa92b9e6f34e2d1b.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/amplify.js.map"
                }
              }
            },
            "/__cordova/packages/velocity_html-reporter.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/velocity_html-reporter.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/a615bf3410d795106d7a78c6a94379745879f7df.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/a615bf3410d795106d7a78c6a94379745879f7df.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/velocity_html-reporter.js.map"
                }
              }
            },
            "/__cordova/packages/velocity_shim.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/velocity_shim.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/14363d085a412115605c41536e4f2867425b89d5.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/14363d085a412115605c41536e4f2867425b89d5.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/velocity_shim.js.map"
                }
              }
            },
            "/__cordova/packages/mike_mocha.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/mike_mocha.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/81e347a16dc440779b8caa4163b6179df74c6bfc.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/81e347a16dc440779b8caa4163b6179df74c6bfc.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/mike_mocha.js.map"
                }
              }
            },
            "/__cordova/packages/coffeescript.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/coffeescript.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/969f68786bbc68e6cad299e74922a53af3d1404b.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/969f68786bbc68e6cad299e74922a53af3d1404b.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/coffeescript.js.map"
                }
              }
            },
            "/__cordova/packages/practicalmeteor_chai.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/practicalmeteor_chai.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/7fbbbec9a13f4adf082b394c5ddd7230d84afc48.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/7fbbbec9a13f4adf082b394c5ddd7230d84afc48.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/practicalmeteor_chai.js.map"
                }
              }
            },
            "/__cordova/packages/practicalmeteor_loglevel.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/practicalmeteor_loglevel.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9185331dfa11fd235edfbef93838d4ca3244d638.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/9185331dfa11fd235edfbef93838d4ca3244d638.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/practicalmeteor_loglevel.js.map"
                }
              }
            },
            "/__cordova/packages/sanjo_jasmine.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/sanjo_jasmine.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/6c8e0ce3908e66d0de626b7c10139a1ad3351d76.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/6c8e0ce3908e66d0de626b7c10139a1ad3351d76.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/sanjo_jasmine.js.map"
                }
              }
            },
            "/__cordova/packages/webapp.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/webapp.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e1be090051b82f046484dccc2de7d747e50c7328.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/e1be090051b82f046484dccc2de7d747e50c7328.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/webapp.js.map"
                }
              }
            },
            "/__cordova/packages/session.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/session.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e436deefadc999c21b6fd16e8e1ecce55c3c3a55.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/e436deefadc999c21b6fd16e8e1ecce55c3c3a55.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/session.js.map"
                }
              }
            },
            "/__cordova/packages/livedata.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/livedata.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/718526445deb4d9baacb6d92c551adea1d36c1e1.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/718526445deb4d9baacb6d92c551adea1d36c1e1.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/livedata.js.map"
                }
              }
            },
            "/__cordova/packages/spacebars.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/spacebars.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/7f53771c84a2eafac2b561c9796dda0d8af8e7f5.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/7f53771c84a2eafac2b561c9796dda0d8af8e7f5.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/spacebars.js.map"
                }
              }
            },
            "/__cordova/packages/fastclick.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/fastclick.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/fe15770c77da049b885a0d66c669fa44057f05ee.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/fe15770c77da049b885a0d66c669fa44057f05ee.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/fastclick.js.map"
                }
              }
            },
            "/__cordova/packages/mobile-status-bar.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/mobile-status-bar.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/f2ba1fc67740003d54a6c78c4c73575d69dcfffe.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/f2ba1fc67740003d54a6c78c4c73575d69dcfffe.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/mobile-status-bar.js.map"
                }
              }
            },
            "/__cordova/packages/launch-screen.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/launch-screen.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/13e1092ebecdb7208762500188f1dc2dea5603e9.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/13e1092ebecdb7208762500188f1dc2dea5603e9.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/launch-screen.js.map"
                }
              }
            },
            "/__cordova/packages/global-imports.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/global-imports.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/client/templates/template.app-body.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/client/templates/template.app-body.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/client/templates/template.app-not-found.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/client/templates/template.app-not-found.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/client/templates/template.auth-join.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/client/templates/template.auth-join.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/client/templates/template.auth-signin.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/client/templates/template.auth-signin.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/client/templates/template.lists-show.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/client/templates/template.lists-show.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/client/templates/template.loading.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/client/templates/template.loading.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/client/templates/template.todos-item.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/client/templates/template.todos-item.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/client/lib/jquery.touchwipe.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/client/lib/jquery.touchwipe.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/lib/collections.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/lib/collections.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/lib/router.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/lib/router.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/client/templates/app-body.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/client/templates/app-body.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/client/templates/auth-join.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/client/templates/auth-join.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/client/templates/auth-signin.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/client/templates/auth-signin.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/client/templates/lists-show.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/client/templates/lists-show.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/client/templates/todos-item.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/client/templates/todos-item.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/service-configuration.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/service-configuration.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/262da6fb1e9c97be84333c429c9a2929c80f8e3b.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/262da6fb1e9c97be84333c429c9a2929c80f8e3b.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/service-configuration.js.map"
                }
              }
            },
            "/__cordova/packages/velocity_test-proxy.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/velocity_test-proxy.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/d6f609666eb2d7e3562b88fc6612d26a3066f5b4.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/d6f609666eb2d7e3562b88fc6612d26a3066f5b4.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/velocity_test-proxy.js.map"
                }
              }
            },
            "/__cordova/packages/velocity_node-soft-mirror.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/velocity_node-soft-mirror.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/acf27a727fa9aa2f29f237ade3b2046fb9890e36.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/__cordova/packages/acf27a727fa9aa2f29f237ade3b2046fb9890e36.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/velocity_node-soft-mirror.js.map"
                }
              }
            },
            "/__cordova/0472e2fd4feaa0108783c2f0e59307535fab1abd.css": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/0472e2fd4feaa0108783c2f0e59307535fab1abd.css"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/0472e2fd4feaa0108783c2f0e59307535fab1abd.map"
                },
                "type": {
                  "type": "constant",
                  "value": "css"
                }
              }
            },
            "/__cordova/0472e2fd4feaa0108783c2f0e59307535fab1abd.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/0472e2fd4feaa0108783c2f0e59307535fab1abd.css.map"
                }
              }
            },
            "/__cordova/packages/velocity_html-reporter/lib/velocity_logo.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/velocity_html-reporter/lib/velocity_logo.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/__cordova/packages/velocity_html-reporter/lib/velocity_cog.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/velocity_html-reporter/lib/velocity_cog.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/__cordova/packages/velocity_html-reporter/lib/icon-time.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/packages/velocity_html-reporter/lib/icon-time.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/__cordova/apple-touch-icon-precomposed.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/apple-touch-icon-precomposed.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/__cordova/favicon.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/favicon.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/__cordova/font/OpenSans-Light-webfont.eot": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/font/OpenSans-Light-webfont.eot"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/__cordova/font/OpenSans-Light-webfont.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/font/OpenSans-Light-webfont.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/__cordova/font/OpenSans-Light-webfont.ttf": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/font/OpenSans-Light-webfont.ttf"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/__cordova/font/OpenSans-Light-webfont.woff": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/font/OpenSans-Light-webfont.woff"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/__cordova/font/OpenSans-Regular-webfont.eot": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/font/OpenSans-Regular-webfont.eot"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/__cordova/font/OpenSans-Regular-webfont.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/font/OpenSans-Regular-webfont.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/__cordova/font/OpenSans-Regular-webfont.ttf": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/font/OpenSans-Regular-webfont.ttf"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/__cordova/font/OpenSans-Regular-webfont.woff": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/font/OpenSans-Regular-webfont.woff"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/__cordova/icon/todos.eot": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/icon/todos.eot"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/__cordova/icon/todos.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/icon/todos.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/__cordova/icon/todos.ttf": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/icon/todos.ttf"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/__cordova/icon/todos.woff": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/icon/todos.woff"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/__cordova/img/logo-todos.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app/.meteor/local/build/programs/web.cordova/app/img/logo-todos.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/__cordova/manifest.json": {
              "type": "object",
              "members": {
                "content": {
                  "type": "constant",
                  "value": "{\"manifest\":[{\"path\":\"packages/underscore.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/underscore.js?0a80a8623e1b40b5df5a05582f288ddd586eaa18\",\"sourceMap\":\"packages/underscore.js.map\",\"sourceMapUrl\":\"/packages/0a80a8623e1b40b5df5a05582f288ddd586eaa18.map\",\"size\":150686,\"hash\":\"0a80a8623e1b40b5df5a05582f288ddd586eaa18\"},{\"path\":\"packages/meteor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/meteor.js?2c2b8b1d565ce777fa1023c8fe53084b94f0c8c6\",\"sourceMap\":\"packages/meteor.js.map\",\"sourceMapUrl\":\"/packages/2c2b8b1d565ce777fa1023c8fe53084b94f0c8c6.map\",\"size\":111237,\"hash\":\"2c2b8b1d565ce777fa1023c8fe53084b94f0c8c6\"},{\"path\":\"packages/json.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/json.js?e22856eae714c681199eabc5c0710b904b125554\",\"sourceMap\":\"packages/json.js.map\",\"sourceMapUrl\":\"/packages/e22856eae714c681199eabc5c0710b904b125554.map\",\"size\":58343,\"hash\":\"e22856eae714c681199eabc5c0710b904b125554\"},{\"path\":\"packages/base64.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/base64.js?1a63019243b73298e2964e6d4680f25bca657726\",\"sourceMap\":\"packages/base64.js.map\",\"sourceMapUrl\":\"/packages/1a63019243b73298e2964e6d4680f25bca657726.map\",\"size\":15685,\"hash\":\"1a63019243b73298e2964e6d4680f25bca657726\"},{\"path\":\"packages/ejson.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ejson.js?71047b64b5196348bdbe5fd5eea9ac97a5a9eb14\",\"sourceMap\":\"packages/ejson.js.map\",\"sourceMapUrl\":\"/packages/71047b64b5196348bdbe5fd5eea9ac97a5a9eb14.map\",\"size\":81471,\"hash\":\"71047b64b5196348bdbe5fd5eea9ac97a5a9eb14\"},{\"path\":\"packages/logging.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/logging.js?efbe67566211d95b5cc8e39ab2faae771509b7ce\",\"sourceMap\":\"packages/logging.js.map\",\"sourceMapUrl\":\"/packages/efbe67566211d95b5cc8e39ab2faae771509b7ce.map\",\"size\":29864,\"hash\":\"efbe67566211d95b5cc8e39ab2faae771509b7ce\"},{\"path\":\"packages/reload.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/reload.js?da8974b7231dd8c0caccb5f322dcf97329d486d1\",\"sourceMap\":\"packages/reload.js.map\",\"sourceMapUrl\":\"/packages/da8974b7231dd8c0caccb5f322dcf97329d486d1.map\",\"size\":25926,\"hash\":\"da8974b7231dd8c0caccb5f322dcf97329d486d1\"},{\"path\":\"packages/tracker.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/tracker.js?517c8fe8ed6408951a30941e64a5383a7174bcfa\",\"sourceMap\":\"packages/tracker.js.map\",\"sourceMapUrl\":\"/packages/517c8fe8ed6408951a30941e64a5383a7174bcfa.map\",\"size\":68185,\"hash\":\"517c8fe8ed6408951a30941e64a5383a7174bcfa\"},{\"path\":\"packages/random.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/random.js?fe7b46080c91ce482acf6fc326afbc5b176f0502\",\"sourceMap\":\"packages/random.js.map\",\"sourceMapUrl\":\"/packages/fe7b46080c91ce482acf6fc326afbc5b176f0502.map\",\"size\":24099,\"hash\":\"fe7b46080c91ce482acf6fc326afbc5b176f0502\"},{\"path\":\"packages/retry.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/retry.js?1f1dd2c35d300110fdaba51ce4473583bc3bf031\",\"sourceMap\":\"packages/retry.js.map\",\"sourceMapUrl\":\"/packages/1f1dd2c35d300110fdaba51ce4473583bc3bf031.map\",\"size\":7245,\"hash\":\"1f1dd2c35d300110fdaba51ce4473583bc3bf031\"},{\"path\":\"packages/check.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/check.js?ac81167b8513b85b926c167bba423981b0c4cf9c\",\"sourceMap\":\"packages/check.js.map\",\"sourceMapUrl\":\"/packages/ac81167b8513b85b926c167bba423981b0c4cf9c.map\",\"size\":35647,\"hash\":\"ac81167b8513b85b926c167bba423981b0c4cf9c\"},{\"path\":\"packages/id-map.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/id-map.js?9ea6eaae8d74693ce2505a858d9a5e60cf191298\",\"sourceMap\":\"packages/id-map.js.map\",\"sourceMapUrl\":\"/packages/9ea6eaae8d74693ce2505a858d9a5e60cf191298.map\",\"size\":8584,\"hash\":\"9ea6eaae8d74693ce2505a858d9a5e60cf191298\"},{\"path\":\"packages/ordered-dict.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ordered-dict.js?bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37\",\"sourceMap\":\"packages/ordered-dict.js.map\",\"sourceMapUrl\":\"/packages/bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37.map\",\"size\":20395,\"hash\":\"bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37\"},{\"path\":\"packages/geojson-utils.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/geojson-utils.js?81b79d5cf96d00b4b7a28987debcffb665c17526\",\"sourceMap\":\"packages/geojson-utils.js.map\",\"sourceMapUrl\":\"/packages/81b79d5cf96d00b4b7a28987debcffb665c17526.map\",\"size\":48339,\"hash\":\"81b79d5cf96d00b4b7a28987debcffb665c17526\"},{\"path\":\"packages/minimongo.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/minimongo.js?e8806aa7782b729b2517ebc0cd10b321667f1427\",\"sourceMap\":\"packages/minimongo.js.map\",\"sourceMapUrl\":\"/packages/e8806aa7782b729b2517ebc0cd10b321667f1427.map\",\"size\":455881,\"hash\":\"e8806aa7782b729b2517ebc0cd10b321667f1427\"},{\"path\":\"packages/ddp.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ddp.js?41b62dcceb3ce0de6ca79c6aed088cccde6a44d8\",\"sourceMap\":\"packages/ddp.js.map\",\"sourceMapUrl\":\"/packages/41b62dcceb3ce0de6ca79c6aed088cccde6a44d8.map\",\"size\":617153,\"hash\":\"41b62dcceb3ce0de6ca79c6aed088cccde6a44d8\"},{\"path\":\"packages/follower-livedata.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/follower-livedata.js?74156c6baa89da861fc4ddb58ef158eac71e58e0\",\"sourceMap\":\"packages/follower-livedata.js.map\",\"sourceMapUrl\":\"/packages/74156c6baa89da861fc4ddb58ef158eac71e58e0.map\",\"size\":1490,\"hash\":\"74156c6baa89da861fc4ddb58ef158eac71e58e0\"},{\"path\":\"packages/application-configuration.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/application-configuration.js?dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f\",\"sourceMap\":\"packages/application-configuration.js.map\",\"sourceMapUrl\":\"/packages/dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f.map\",\"size\":1485,\"hash\":\"dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f\"},{\"path\":\"packages/insecure.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/insecure.js?3dc9d4a2dad55999b5b15a447d57f3d5fb66b290\",\"sourceMap\":\"packages/insecure.js.map\",\"sourceMapUrl\":\"/packages/3dc9d4a2dad55999b5b15a447d57f3d5fb66b290.map\",\"size\":1290,\"hash\":\"3dc9d4a2dad55999b5b15a447d57f3d5fb66b290\"},{\"path\":\"packages/mongo.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/mongo.js?052f30e968644b2b39a96605ffee73a7684ff37b\",\"sourceMap\":\"packages/mongo.js.map\",\"sourceMapUrl\":\"/packages/052f30e968644b2b39a96605ffee73a7684ff37b.map\",\"size\":147662,\"hash\":\"052f30e968644b2b39a96605ffee73a7684ff37b\"},{\"path\":\"packages/url.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/url.js?2312d739008b2ffa52f13c77c5d6fc59c9e17d56\",\"sourceMap\":\"packages/url.js.map\",\"sourceMapUrl\":\"/packages/2312d739008b2ffa52f13c77c5d6fc59c9e17d56.map\",\"size\":6642,\"hash\":\"2312d739008b2ffa52f13c77c5d6fc59c9e17d56\"},{\"path\":\"packages/http.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/http.js?9c5d152169ba9a5a57b6b8ec28e64bbd0d308077\",\"sourceMap\":\"packages/http.js.map\",\"sourceMapUrl\":\"/packages/9c5d152169ba9a5a57b6b8ec28e64bbd0d308077.map\",\"size\":37036,\"hash\":\"9c5d152169ba9a5a57b6b8ec28e64bbd0d308077\"},{\"path\":\"packages/autoupdate.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/autoupdate.js?83a587ebd1efacabc89a2dd08e85b48a00b1c696\",\"sourceMap\":\"packages/autoupdate.js.map\",\"sourceMapUrl\":\"/packages/83a587ebd1efacabc89a2dd08e85b48a00b1c696.map\",\"size\":39380,\"hash\":\"83a587ebd1efacabc89a2dd08e85b48a00b1c696\"},{\"path\":\"packages/meteor-platform.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/meteor-platform.js?499a2f8522e25820b1153c69a92751ccaae507b3\",\"sourceMap\":\"packages/meteor-platform.js.map\",\"sourceMapUrl\":\"/packages/499a2f8522e25820b1153c69a92751ccaae507b3.map\",\"size\":1384,\"hash\":\"499a2f8522e25820b1153c69a92751ccaae507b3\"},{\"path\":\"packages/less.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/less.js?7d1bf981a25a449d6270558bcfc983313c40cd26\",\"sourceMap\":\"packages/less.js.map\",\"sourceMapUrl\":\"/packages/7d1bf981a25a449d6270558bcfc983313c40cd26.map\",\"size\":1286,\"hash\":\"7d1bf981a25a449d6270558bcfc983313c40cd26\"},{\"path\":\"packages/reactive-dict.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/reactive-dict.js?6b25309b1f0dcf775b44984324878d6f8ad1abc2\",\"sourceMap\":\"packages/reactive-dict.js.map\",\"sourceMapUrl\":\"/packages/6b25309b1f0dcf775b44984324878d6f8ad1abc2.map\",\"size\":19802,\"hash\":\"6b25309b1f0dcf775b44984324878d6f8ad1abc2\"},{\"path\":\"packages/deps.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/deps.js?504589e1e9585dec8f9f6094e5a87b22de3783a1\",\"sourceMap\":\"packages/deps.js.map\",\"sourceMapUrl\":\"/packages/504589e1e9585dec8f9f6094e5a87b22de3783a1.map\",\"size\":1442,\"hash\":\"504589e1e9585dec8f9f6094e5a87b22de3783a1\"},{\"path\":\"packages/jquery.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/jquery.js?dd8bac56f8fd3666d433d2285ae01e52597cc51a\",\"sourceMap\":\"packages/jquery.js.map\",\"sourceMapUrl\":\"/packages/dd8bac56f8fd3666d433d2285ae01e52597cc51a.map\",\"size\":1296513,\"hash\":\"dd8bac56f8fd3666d433d2285ae01e52597cc51a\"},{\"path\":\"packages/htmljs.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/htmljs.js?567eb96d5d22631c03d6aca6afa4c42f0d1295f2\",\"sourceMap\":\"packages/htmljs.js.map\",\"sourceMapUrl\":\"/packages/567eb96d5d22631c03d6aca6afa4c42f0d1295f2.map\",\"size\":60161,\"hash\":\"567eb96d5d22631c03d6aca6afa4c42f0d1295f2\"},{\"path\":\"packages/observe-sequence.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/observe-sequence.js?2fd807ea171ead273b9e6458607cb226012d9240\",\"sourceMap\":\"packages/observe-sequence.js.map\",\"sourceMapUrl\":\"/packages/2fd807ea171ead273b9e6458607cb226012d9240.map\",\"size\":30271,\"hash\":\"2fd807ea171ead273b9e6458607cb226012d9240\"},{\"path\":\"packages/reactive-var.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/reactive-var.js?20335b7b37165980ddd9f23943b2e5b00aae1cc2\",\"sourceMap\":\"packages/reactive-var.js.map\",\"sourceMapUrl\":\"/packages/20335b7b37165980ddd9f23943b2e5b00aae1cc2.map\",\"size\":13963,\"hash\":\"20335b7b37165980ddd9f23943b2e5b00aae1cc2\"},{\"path\":\"packages/blaze.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/blaze.js?efa68f65e67544b5a05509804bf97e2c91ce75eb\",\"sourceMap\":\"packages/blaze.js.map\",\"sourceMapUrl\":\"/packages/efa68f65e67544b5a05509804bf97e2c91ce75eb.map\",\"size\":391530,\"hash\":\"efa68f65e67544b5a05509804bf97e2c91ce75eb\"},{\"path\":\"packages/templating.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/templating.js?599ba307216da826d8b335332ebcc9a497a369a0\",\"sourceMap\":\"packages/templating.js.map\",\"sourceMapUrl\":\"/packages/599ba307216da826d8b335332ebcc9a497a369a0.map\",\"size\":11910,\"hash\":\"599ba307216da826d8b335332ebcc9a497a369a0\"},{\"path\":\"packages/iron_core.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_core.js?fe41a023a7a6f1ded90b0729437928a8ddccc7d4\",\"sourceMap\":\"packages/iron_core.js.map\",\"sourceMapUrl\":\"/packages/fe41a023a7a6f1ded90b0729437928a8ddccc7d4.map\",\"size\":31679,\"hash\":\"fe41a023a7a6f1ded90b0729437928a8ddccc7d4\"},{\"path\":\"packages/ui.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ui.js?5a663333fd30f8fd913f110e0ef779e84f67c4b8\",\"sourceMap\":\"packages/ui.js.map\",\"sourceMapUrl\":\"/packages/5a663333fd30f8fd913f110e0ef779e84f67c4b8.map\",\"size\":1529,\"hash\":\"5a663333fd30f8fd913f110e0ef779e84f67c4b8\"},{\"path\":\"packages/iron_dynamic-template.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_dynamic-template.js?32038885cb1dad7957291ffebfffcb7f8cd57d20\",\"sourceMap\":\"packages/iron_dynamic-template.js.map\",\"sourceMapUrl\":\"/packages/32038885cb1dad7957291ffebfffcb7f8cd57d20.map\",\"size\":51775,\"hash\":\"32038885cb1dad7957291ffebfffcb7f8cd57d20\"},{\"path\":\"packages/iron_layout.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_layout.js?080dc95e770e3130757bf6af69fd0abb99573ae4\",\"sourceMap\":\"packages/iron_layout.js.map\",\"sourceMapUrl\":\"/packages/080dc95e770e3130757bf6af69fd0abb99573ae4.map\",\"size\":56973,\"hash\":\"080dc95e770e3130757bf6af69fd0abb99573ae4\"},{\"path\":\"packages/iron_router.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_router.js?da7f2ac81c3fd9daebf49ce9a6980a54caa1dc17\",\"sourceMap\":\"packages/iron_router.js.map\",\"sourceMapUrl\":\"/packages/da7f2ac81c3fd9daebf49ce9a6980a54caa1dc17.map\",\"size\":250621,\"hash\":\"da7f2ac81c3fd9daebf49ce9a6980a54caa1dc17\"},{\"path\":\"packages/localstorage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/localstorage.js?9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c\",\"sourceMap\":\"packages/localstorage.js.map\",\"sourceMapUrl\":\"/packages/9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c.map\",\"size\":7092,\"hash\":\"9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c\"},{\"path\":\"packages/accounts-base.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/accounts-base.js?88bb0577cebfbd40b522bb337f8ff8af92244c2f\",\"sourceMap\":\"packages/accounts-base.js.map\",\"sourceMapUrl\":\"/packages/88bb0577cebfbd40b522bb337f8ff8af92244c2f.map\",\"size\":109093,\"hash\":\"88bb0577cebfbd40b522bb337f8ff8af92244c2f\"},{\"path\":\"packages/sha.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/sha.js?65ef52f7221944768bfc2049d6b7e163c8ae2615\",\"sourceMap\":\"packages/sha.js.map\",\"sourceMapUrl\":\"/packages/65ef52f7221944768bfc2049d6b7e163c8ae2615.map\",\"size\":19584,\"hash\":\"65ef52f7221944768bfc2049d6b7e163c8ae2615\"},{\"path\":\"packages/srp.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/srp.js?e2e28156e8c912d504a3586351c8a1119f664cfd\",\"sourceMap\":\"packages/srp.js.map\",\"sourceMapUrl\":\"/packages/e2e28156e8c912d504a3586351c8a1119f664cfd.map\",\"size\":173470,\"hash\":\"e2e28156e8c912d504a3586351c8a1119f664cfd\"},{\"path\":\"packages/accounts-password.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/accounts-password.js?3845cc71ad2dc1378b7d8cc4164a78359506dd40\",\"sourceMap\":\"packages/accounts-password.js.map\",\"sourceMapUrl\":\"/packages/3845cc71ad2dc1378b7d8cc4164a78359506dd40.map\",\"size\":33170,\"hash\":\"3845cc71ad2dc1378b7d8cc4164a78359506dd40\"},{\"path\":\"packages/velocity_core.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_core.js?cecf2443254038195518d507d5fe0ecdc5dce435\",\"sourceMap\":\"packages/velocity_core.js.map\",\"sourceMapUrl\":\"/packages/cecf2443254038195518d507d5fe0ecdc5dce435.map\",\"size\":12238,\"hash\":\"cecf2443254038195518d507d5fe0ecdc5dce435\"},{\"path\":\"packages/amplify.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/amplify.js?0943ecb804169b991257a319fa92b9e6f34e2d1b\",\"sourceMap\":\"packages/amplify.js.map\",\"sourceMapUrl\":\"/packages/0943ecb804169b991257a319fa92b9e6f34e2d1b.map\",\"size\":88428,\"hash\":\"0943ecb804169b991257a319fa92b9e6f34e2d1b\"},{\"path\":\"packages/velocity_html-reporter.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_html-reporter.js?a615bf3410d795106d7a78c6a94379745879f7df\",\"sourceMap\":\"packages/velocity_html-reporter.js.map\",\"sourceMapUrl\":\"/packages/a615bf3410d795106d7a78c6a94379745879f7df.map\",\"size\":90264,\"hash\":\"a615bf3410d795106d7a78c6a94379745879f7df\"},{\"path\":\"packages/velocity_shim.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_shim.js?14363d085a412115605c41536e4f2867425b89d5\",\"sourceMap\":\"packages/velocity_shim.js.map\",\"sourceMapUrl\":\"/packages/14363d085a412115605c41536e4f2867425b89d5.map\",\"size\":2905,\"hash\":\"14363d085a412115605c41536e4f2867425b89d5\"},{\"path\":\"packages/mike_mocha.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/mike_mocha.js?81e347a16dc440779b8caa4163b6179df74c6bfc\",\"sourceMap\":\"packages/mike_mocha.js.map\",\"sourceMapUrl\":\"/packages/81e347a16dc440779b8caa4163b6179df74c6bfc.map\",\"size\":1347056,\"hash\":\"81e347a16dc440779b8caa4163b6179df74c6bfc\"},{\"path\":\"packages/coffeescript.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/coffeescript.js?969f68786bbc68e6cad299e74922a53af3d1404b\",\"sourceMap\":\"packages/coffeescript.js.map\",\"sourceMapUrl\":\"/packages/969f68786bbc68e6cad299e74922a53af3d1404b.map\",\"size\":1294,\"hash\":\"969f68786bbc68e6cad299e74922a53af3d1404b\"},{\"path\":\"packages/practicalmeteor_chai.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/practicalmeteor_chai.js?7fbbbec9a13f4adf082b394c5ddd7230d84afc48\",\"sourceMap\":\"packages/practicalmeteor_chai.js.map\",\"sourceMapUrl\":\"/packages/7fbbbec9a13f4adf082b394c5ddd7230d84afc48.map\",\"size\":570118,\"hash\":\"7fbbbec9a13f4adf082b394c5ddd7230d84afc48\"},{\"path\":\"packages/practicalmeteor_loglevel.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/practicalmeteor_loglevel.js?9185331dfa11fd235edfbef93838d4ca3244d638\",\"sourceMap\":\"packages/practicalmeteor_loglevel.js.map\",\"sourceMapUrl\":\"/packages/9185331dfa11fd235edfbef93838d4ca3244d638.map\",\"size\":28719,\"hash\":\"9185331dfa11fd235edfbef93838d4ca3244d638\"},{\"path\":\"packages/sanjo_jasmine.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/sanjo_jasmine.js?6c8e0ce3908e66d0de626b7c10139a1ad3351d76\",\"sourceMap\":\"packages/sanjo_jasmine.js.map\",\"sourceMapUrl\":\"/packages/6c8e0ce3908e66d0de626b7c10139a1ad3351d76.map\",\"size\":537001,\"hash\":\"6c8e0ce3908e66d0de626b7c10139a1ad3351d76\"},{\"path\":\"packages/webapp.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/webapp.js?e1be090051b82f046484dccc2de7d747e50c7328\",\"sourceMap\":\"packages/webapp.js.map\",\"sourceMapUrl\":\"/packages/e1be090051b82f046484dccc2de7d747e50c7328.map\",\"size\":3106,\"hash\":\"e1be090051b82f046484dccc2de7d747e50c7328\"},{\"path\":\"packages/session.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/session.js?e436deefadc999c21b6fd16e8e1ecce55c3c3a55\",\"sourceMap\":\"packages/session.js.map\",\"sourceMapUrl\":\"/packages/e436deefadc999c21b6fd16e8e1ecce55c3c3a55.map\",\"size\":6497,\"hash\":\"e436deefadc999c21b6fd16e8e1ecce55c3c3a55\"},{\"path\":\"packages/livedata.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/livedata.js?718526445deb4d9baacb6d92c551adea1d36c1e1\",\"sourceMap\":\"packages/livedata.js.map\",\"sourceMapUrl\":\"/packages/718526445deb4d9baacb6d92c551adea1d36c1e1.map\",\"size\":1413,\"hash\":\"718526445deb4d9baacb6d92c551adea1d36c1e1\"},{\"path\":\"packages/spacebars.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/spacebars.js?7f53771c84a2eafac2b561c9796dda0d8af8e7f5\",\"sourceMap\":\"packages/spacebars.js.map\",\"sourceMapUrl\":\"/packages/7f53771c84a2eafac2b561c9796dda0d8af8e7f5.map\",\"size\":42206,\"hash\":\"7f53771c84a2eafac2b561c9796dda0d8af8e7f5\"},{\"path\":\"packages/fastclick.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/fastclick.js?fe15770c77da049b885a0d66c669fa44057f05ee\",\"sourceMap\":\"packages/fastclick.js.map\",\"sourceMapUrl\":\"/packages/fe15770c77da049b885a0d66c669fa44057f05ee.map\",\"size\":109373,\"hash\":\"fe15770c77da049b885a0d66c669fa44057f05ee\"},{\"path\":\"packages/mobile-status-bar.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/mobile-status-bar.js?f2ba1fc67740003d54a6c78c4c73575d69dcfffe\",\"sourceMap\":\"packages/mobile-status-bar.js.map\",\"sourceMapUrl\":\"/packages/f2ba1fc67740003d54a6c78c4c73575d69dcfffe.map\",\"size\":2430,\"hash\":\"f2ba1fc67740003d54a6c78c4c73575d69dcfffe\"},{\"path\":\"packages/launch-screen.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/launch-screen.js?13e1092ebecdb7208762500188f1dc2dea5603e9\",\"sourceMap\":\"packages/launch-screen.js.map\",\"sourceMapUrl\":\"/packages/13e1092ebecdb7208762500188f1dc2dea5603e9.map\",\"size\":9707,\"hash\":\"13e1092ebecdb7208762500188f1dc2dea5603e9\"},{\"path\":\"packages/global-imports.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/global-imports.js?2db9943381a459a2a5f686705ecfa1eb2c33f53b\",\"size\":993,\"hash\":\"2db9943381a459a2a5f686705ecfa1eb2c33f53b\"},{\"path\":\"app/client/templates/template.app-body.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/template.app-body.js?392d4c54a4dfc1c22a40e2b868f0199c0103f925\",\"size\":4717,\"hash\":\"392d4c54a4dfc1c22a40e2b868f0199c0103f925\"},{\"path\":\"app/client/templates/template.app-not-found.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/template.app-not-found.js?84851b39b7a025eace6bb618db892324ea0dd0d2\",\"size\":597,\"hash\":\"84851b39b7a025eace6bb618db892324ea0dd0d2\"},{\"path\":\"app/client/templates/template.auth-join.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/template.auth-join.js?5b9ffb0f618696bf3e72f652c7eca4abb8c5a991\",\"size\":2924,\"hash\":\"5b9ffb0f618696bf3e72f652c7eca4abb8c5a991\"},{\"path\":\"app/client/templates/template.auth-signin.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/template.auth-signin.js?dbd742ebf1462704e7faeaa09448298071baa2f6\",\"size\":2525,\"hash\":\"dbd742ebf1462704e7faeaa09448298071baa2f6\"},{\"path\":\"app/client/templates/template.lists-show.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/template.lists-show.js?6910668bca276897de174aa181ef65a3964c4607\",\"size\":5336,\"hash\":\"6910668bca276897de174aa181ef65a3964c4607\"},{\"path\":\"app/client/templates/template.loading.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/template.loading.js?3388a0e0a34e6ef0bcb0df47793189675f371917\",\"size\":229,\"hash\":\"3388a0e0a34e6ef0bcb0df47793189675f371917\"},{\"path\":\"app/client/templates/template.todos-item.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/template.todos-item.js?a704843a2161d902254f16a284e434e5d1df3ab2\",\"size\":933,\"hash\":\"a704843a2161d902254f16a284e434e5d1df3ab2\"},{\"path\":\"app/client/lib/jquery.touchwipe.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/lib/jquery.touchwipe.js?c61a2a45015cc89ed99746123444f9c4e427286f\",\"size\":2292,\"hash\":\"c61a2a45015cc89ed99746123444f9c4e427286f\"},{\"path\":\"app/lib/collections.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/collections.js?07711601078c9c3a9c90bfb622a23184713abd80\",\"size\":484,\"hash\":\"07711601078c9c3a9c90bfb622a23184713abd80\"},{\"path\":\"app/lib/router.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/router.js?e7039932e76523ca27eccf98688e4b32d4f604e6\",\"size\":1742,\"hash\":\"e7039932e76523ca27eccf98688e4b32d4f604e6\"},{\"path\":\"app/client/templates/app-body.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/app-body.js?04569da6e129b5b5adcd029a53c5d0da40ac2fac\",\"size\":3442,\"hash\":\"04569da6e129b5b5adcd029a53c5d0da40ac2fac\"},{\"path\":\"app/client/templates/auth-join.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/auth-join.js?8a6c2d95dd0d8a09bee9aae6a546583ccd8353ef\",\"size\":1149,\"hash\":\"8a6c2d95dd0d8a09bee9aae6a546583ccd8353ef\"},{\"path\":\"app/client/templates/auth-signin.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/auth-signin.js?fc9708b6b0ea077ececf15fdcbd169bac5a5ca9e\",\"size\":984,\"hash\":\"fc9708b6b0ea077ececf15fdcbd169bac5a5ca9e\"},{\"path\":\"app/client/templates/lists-show.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/lists-show.js?dbeb00e56db518b4dc3e8fd741b3d219950772f7\",\"size\":4535,\"hash\":\"dbeb00e56db518b4dc3e8fd741b3d219950772f7\"},{\"path\":\"app/client/templates/todos-item.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/todos-item.js?fc9172f2c72e6974bec3be18f90788d37ca2e832\",\"size\":1580,\"hash\":\"fc9172f2c72e6974bec3be18f90788d37ca2e832\"},{\"path\":\"packages/service-configuration.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/service-configuration.js?262da6fb1e9c97be84333c429c9a2929c80f8e3b\",\"sourceMap\":\"packages/service-configuration.js.map\",\"sourceMapUrl\":\"/packages/262da6fb1e9c97be84333c429c9a2929c80f8e3b.map\",\"size\":5082,\"hash\":\"262da6fb1e9c97be84333c429c9a2929c80f8e3b\"},{\"path\":\"packages/velocity_test-proxy.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_test-proxy.js?d6f609666eb2d7e3562b88fc6612d26a3066f5b4\",\"sourceMap\":\"packages/velocity_test-proxy.js.map\",\"sourceMapUrl\":\"/packages/d6f609666eb2d7e3562b88fc6612d26a3066f5b4.map\",\"size\":14223,\"hash\":\"d6f609666eb2d7e3562b88fc6612d26a3066f5b4\"},{\"path\":\"packages/velocity_node-soft-mirror.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_node-soft-mirror.js?acf27a727fa9aa2f29f237ade3b2046fb9890e36\",\"sourceMap\":\"packages/velocity_node-soft-mirror.js.map\",\"sourceMapUrl\":\"/packages/acf27a727fa9aa2f29f237ade3b2046fb9890e36.map\",\"size\":11067,\"hash\":\"acf27a727fa9aa2f29f237ade3b2046fb9890e36\"},{\"path\":\"0472e2fd4feaa0108783c2f0e59307535fab1abd.css\",\"where\":\"client\",\"type\":\"css\",\"cacheable\":true,\"url\":\"/0472e2fd4feaa0108783c2f0e59307535fab1abd.css\",\"sourceMap\":\"0472e2fd4feaa0108783c2f0e59307535fab1abd.css.map\",\"sourceMapUrl\":\"/0472e2fd4feaa0108783c2f0e59307535fab1abd.map\",\"size\":42058,\"hash\":\"0472e2fd4feaa0108783c2f0e59307535fab1abd\"},{\"path\":\"packages/velocity_html-reporter/lib/velocity_logo.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/velocity_html-reporter/lib/velocity_logo.svg\",\"size\":3723,\"hash\":\"bd19ecdc8eb1084f7bb562c298e4ce41f9cdc698\"},{\"path\":\"packages/velocity_html-reporter/lib/velocity_cog.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/velocity_html-reporter/lib/velocity_cog.svg\",\"size\":987,\"hash\":\"6e74acfffcbd2bafdc8a95d9db7762ece07b1e81\"},{\"path\":\"packages/velocity_html-reporter/lib/icon-time.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/velocity_html-reporter/lib/icon-time.png\",\"size\":2834,\"hash\":\"868f492022a4dab0f1522de6aae0773531bc6e85\"},{\"path\":\"app/apple-touch-icon-precomposed.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/apple-touch-icon-precomposed.png\",\"size\":2222,\"hash\":\"9d9e446418108c4fa02acbfc496ca2dd45db90fc\"},{\"path\":\"app/favicon.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/favicon.png\",\"size\":1490,\"hash\":\"48fc4f8b1972842c8023a0cf2f8faf64d05ff922\"},{\"path\":\"app/font/OpenSans-Light-webfont.eot\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/font/OpenSans-Light-webfont.eot\",\"size\":29794,\"hash\":\"ed68cada8c4bfa00683942d9c87bf3cc34666522\"},{\"path\":\"app/font/OpenSans-Light-webfont.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/font/OpenSans-Light-webfont.svg\",\"size\":56447,\"hash\":\"6f25974f01d4ee1355ac2bc406f7c12773b31077\"},{\"path\":\"app/font/OpenSans-Light-webfont.ttf\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/font/OpenSans-Light-webfont.ttf\",\"size\":29612,\"hash\":\"d92b1bee5c22a1647396e951549f9771c6591fb4\"},{\"path\":\"app/font/OpenSans-Light-webfont.woff\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/font/OpenSans-Light-webfont.woff\",\"size\":19396,\"hash\":\"2cf63379bcba2127662f7bedb01ed0f7b82dcf0a\"},{\"path\":\"app/font/OpenSans-Regular-webfont.eot\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/font/OpenSans-Regular-webfont.eot\",\"size\":29934,\"hash\":\"c7ac4f61bc716a94362fbda76f5784ed3a17b61c\"},{\"path\":\"app/font/OpenSans-Regular-webfont.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/font/OpenSans-Regular-webfont.svg\",\"size\":58495,\"hash\":\"61e2d9bace6b84c487668d196e628fca6a561245\"},{\"path\":\"app/font/OpenSans-Regular-webfont.ttf\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/font/OpenSans-Regular-webfont.ttf\",\"size\":29744,\"hash\":\"1bda9f65b10d2b75b5b8049cd9107e6109112d7d\"},{\"path\":\"app/font/OpenSans-Regular-webfont.woff\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/font/OpenSans-Regular-webfont.woff\",\"size\":19624,\"hash\":\"4e9fe179bbb4c898b4658ca4801e82d82c2f71cd\"},{\"path\":\"app/icon/todos.eot\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/icon/todos.eot\",\"size\":6000,\"hash\":\"00b12bc24c938d690cf4f3d3013f8da6daec6f2b\"},{\"path\":\"app/icon/todos.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/icon/todos.svg\",\"size\":17411,\"hash\":\"491b131a51a16f86fb689ddea516c04735db824d\"},{\"path\":\"app/icon/todos.ttf\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/icon/todos.ttf\",\"size\":5844,\"hash\":\"b6c33e34f594d10609e9eab7f072be3ad325d863\"},{\"path\":\"app/icon/todos.woff\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/icon/todos.woff\",\"size\":5920,\"hash\":\"74d722b324c90b1b1632cdb13db9a62baac68aaf\"},{\"path\":\"app/img/logo-todos.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/img/logo-todos.svg\",\"size\":4066,\"hash\":\"f09205164c463c61a7d0f075cf2f04fdf5c5d895\"},{\"path\":\"head.html\",\"where\":\"internal\",\"type\":\"head\",\"hash\":\"7f9aef28d8968765436be6f5aa5d2f43f36a6b2e\"}],\"version\":\"c7ea561a189581ec595df8666cdcb26ae60b780f\"}"
                },
                "type": {
                  "type": "constant",
                  "value": "json"
                }
              }
            }
          }
        },
        "inlineScriptsAllowed": {
          "type": "function"
        },
        "setInlineScriptsAllowed": {
          "type": "function"
        },
        "setBundledJsCssPrefix": {
          "type": "function"
        },
        "addStaticJs": {
          "type": "function"
        },
        "getBoilerplate": {
          "type": "function"
        },
        "additionalStaticJs": {
          "type": "object"
        },
        "refreshableAssets": {
          "type": "object",
          "members": {
            "allCss": {
              "type": "array"
            }
          }
        }
      }
    }
  },
  "check": {
    "check": {
      "type": "function"
    },
    "Match": {
      "type": "object",
      "members": {
        "Optional": {
          "type": "function"
        },
        "OneOf": {
          "type": "function"
        },
        "Any": {
          "type": "array"
        },
        "Where": {
          "type": "function"
        },
        "ObjectIncluding": {
          "type": "function"
        },
        "ObjectWithValues": {
          "type": "function"
        },
        "Integer": {
          "type": "array"
        },
        "Error": {
          "type": "function",
          "refID": 13,
          "members": {
            "captureStackTrace": {
              "type": "function"
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 13
                }
              }
            }
          }
        },
        "test": {
          "type": "function"
        }
      }
    }
  },
  "retry": {
    "Retry": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "clear": {
              "type": "function"
            },
            "retryLater": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "callback-hook": {
    "Hook": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "register": {
              "type": "function"
            },
            "each": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "ddp": {
    "DDP": {
      "type": "object",
      "members": {
        "ConnectionError": {
          "type": "function",
          "refID": 1,
          "members": {
            "captureStackTrace": {
              "type": "function",
              "refID": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                }
              }
            }
          }
        },
        "ForcedReconnectError": {
          "type": "function",
          "refID": 7,
          "members": {
            "captureStackTrace": {
              "ref": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "ref": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 7
                }
              }
            }
          }
        },
        "randomStream": {
          "type": "function"
        },
        "connect": {
          "type": "function"
        }
      }
    },
    "DDPServer": {
      "type": "object"
    },
    "LivedataTest": {
      "type": "object",
      "members": {
        "ClientStream": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "send": {
                  "type": "function"
                },
                "on": {
                  "type": "function"
                },
                "reconnect": {
                  "type": "function"
                },
                "disconnect": {
                  "type": "function"
                },
                "status": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toSockjsUrl": {
          "type": "function"
        },
        "SessionCollectionView": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "isEmpty": {
                  "type": "function"
                },
                "diff": {
                  "type": "function"
                },
                "diffDocument": {
                  "type": "function"
                },
                "added": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "removed": {
                  "type": "function"
                }
              }
            }
          }
        },
        "calculateVersion": {
          "type": "function"
        },
        "SUPPORTED_DDP_VERSIONS": {
          "type": "array"
        },
        "Connection": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "registerStore": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "methods": {
                  "type": "function"
                },
                "call": {
                  "type": "function"
                },
                "apply": {
                  "type": "function"
                },
                "status": {
                  "type": "function"
                },
                "reconnect": {
                  "type": "function"
                },
                "disconnect": {
                  "type": "function"
                },
                "close": {
                  "type": "function"
                },
                "userId": {
                  "type": "function"
                },
                "setUserId": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "follower-livedata": {
    "Follower": {
      "type": "object",
      "members": {
        "connect": {
          "type": "function"
        }
      }
    }
  },
  "application-configuration": {
    "AppConfig": {
      "type": "object",
      "members": {
        "findGalaxy": {
          "type": "function"
        },
        "getAppConfig": {
          "type": "function"
        },
        "getStarForThisJob": {
          "type": "function"
        },
        "configurePackage": {
          "type": "function"
        },
        "configureService": {
          "type": "function"
        }
      }
    }
  },
  "binary-heap": {
    "MaxHeap": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            },
            "maxElementId": {
              "type": "function"
            }
          }
        }
      }
    },
    "MinHeap": {
      "type": "function",
      "refID": 0,
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "maxElementId": {
              "type": "function"
            },
            "minElementId": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            }
          }
        }
      }
    },
    "MinMaxHeap": {
      "type": "function",
      "refID": 0,
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            },
            "minElementId": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "maxElementId": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "insecure": {},
  "mongo": {
    "MongoTest": {
      "type": "object",
      "members": {
        "DocFetcher": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "fetch": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Mongo": {
      "type": "object",
      "members": {
        "Collection": {
          "type": "function",
          "members": {
            "Cursor": {
              "type": "function",
              "refID": 2,
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "refID": 20,
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "find": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                },
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "upsert": {
                  "type": "function"
                },
                "allow": {
                  "type": "function"
                },
                "deny": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ObjectID": {
          "ref": 20
        },
        "Cursor": {
          "ref": 2
        }
      }
    }
  },
  "autoupdate": {
    "Autoupdate": {
      "type": "object",
      "members": {
        "autoupdateVersion": {
          "type": "constant",
          "value": "uXkgHSS3N4bDdafsE"
        },
        "autoupdateVersionRefreshable": {
          "type": "constant",
          "value": "f17dac6c6cc0ad320ae0a038ccc2501b30069e90"
        },
        "autoupdateVersionCordova": {
          "type": "constant",
          "value": "c7ea561a189581ec595df8666cdcb26ae60b780f"
        },
        "appId": {
          "type": "constant",
          "value": "197a7981svu1y41auzvk9"
        }
      }
    }
  },
  "meteor-platform": {},
  "less": {},
  "reactive-dict": {
    "ReactiveDict": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "set": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "equals": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "iron:core": {
    "Iron": {
      "type": "object",
      "members": {
        "utils": {
          "type": "object",
          "members": {
            "assert": {
              "type": "function"
            },
            "warn": {
              "type": "function"
            },
            "defaultValue": {
              "type": "function"
            },
            "inherits": {
              "type": "function"
            },
            "extend": {
              "type": "function"
            },
            "namespace": {
              "type": "function"
            },
            "resolve": {
              "type": "function"
            },
            "capitalize": {
              "type": "function"
            },
            "classCase": {
              "type": "function"
            },
            "camelCase": {
              "type": "function"
            },
            "notifyDeprecated": {
              "type": "function"
            },
            "withDeprecatedNotice": {
              "type": "function"
            },
            "debug": {
              "type": "function"
            }
          }
        },
        "DynamicTemplate": {
          "type": "function",
          "members": {
            "getParentDataContext": {
              "type": "function",
              "refID": 29
            },
            "getInclusionArguments": {
              "type": "function",
              "refID": 31
            },
            "args": {
              "type": "function",
              "refID": 33
            },
            "extend": {
              "type": "function",
              "refID": 35
            },
            "prototype": {
              "type": "object",
              "members": {
                "template": {
                  "type": "function",
                  "refID": 38
                },
                "defaultTemplate": {
                  "type": "function",
                  "refID": 40
                },
                "clear": {
                  "type": "function"
                },
                "data": {
                  "type": "function",
                  "refID": 44
                },
                "create": {
                  "type": "function",
                  "refID": 46
                },
                "destroy": {
                  "type": "function",
                  "refID": 48
                },
                "onViewCreated": {
                  "type": "function",
                  "refID": 50
                },
                "onViewReady": {
                  "type": "function",
                  "refID": 52
                },
                "onViewDestroyed": {
                  "type": "function",
                  "refID": 54
                },
                "insert": {
                  "type": "function",
                  "refID": 56
                },
                "getController": {
                  "type": "function",
                  "refID": 58
                },
                "setController": {
                  "type": "function",
                  "refID": 60
                },
                "hasController": {
                  "type": "function",
                  "refID": 62
                }
              }
            }
          }
        },
        "Layout": {
          "type": "function",
          "refID": 64,
          "members": {
            "DEFAULT_REGION": {
              "type": "constant",
              "value": "main"
            },
            "getParentDataContext": {
              "ref": 29
            },
            "getInclusionArguments": {
              "ref": 31
            },
            "args": {
              "ref": 33
            },
            "extend": {
              "ref": 35
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 64
                },
                "region": {
                  "type": "function"
                },
                "destroyRegions": {
                  "type": "function"
                },
                "render": {
                  "type": "function"
                },
                "has": {
                  "type": "function"
                },
                "regionKeys": {
                  "type": "function"
                },
                "clear": {
                  "type": "function"
                },
                "clearAll": {
                  "type": "function"
                },
                "beginRendering": {
                  "type": "function"
                },
                "onRegionCreated": {
                  "type": "function"
                },
                "onRegionRendered": {
                  "type": "function"
                },
                "onRegionDestroyed": {
                  "type": "function"
                },
                "template": {
                  "ref": 38
                },
                "defaultTemplate": {
                  "ref": 40
                },
                "data": {
                  "ref": 44
                },
                "create": {
                  "ref": 46
                },
                "destroy": {
                  "ref": 48
                },
                "onViewCreated": {
                  "ref": 50
                },
                "onViewReady": {
                  "ref": 52
                },
                "onViewDestroyed": {
                  "ref": 54
                },
                "insert": {
                  "ref": 56
                },
                "getController": {
                  "ref": 58
                },
                "setController": {
                  "ref": 60
                },
                "hasController": {
                  "ref": 62
                }
              }
            }
          }
        }
      }
    }
  },
  "iron:dynamic-template": {},
  "iron:layout": {},
  "iron:router": {
    "RouteController": {
      "type": "function",
      "refID": 0,
      "members": {
        "extend": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "action": {
              "type": "function"
            },
            "lookupProperty": {
              "type": "function"
            },
            "runHooks": {
              "type": "function"
            },
            "stop": {
              "type": "function"
            }
          }
        }
      }
    },
    "Route": {
      "type": "function",
      "refID": 0,
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "compile": {
              "type": "function"
            },
            "params": {
              "type": "function"
            },
            "normalizePath": {
              "type": "function"
            },
            "test": {
              "type": "function"
            },
            "exec": {
              "type": "function"
            },
            "resolve": {
              "type": "function"
            },
            "path": {
              "type": "function"
            },
            "url": {
              "type": "function"
            },
            "findController": {
              "type": "function"
            },
            "newController": {
              "type": "function"
            },
            "getController": {
              "type": "function"
            }
          }
        }
      }
    },
    "Router": {
      "type": "object",
      "members": {
        "options": {
          "type": "object",
          "members": {
            "layoutTemplate": {
              "type": "constant",
              "value": "appBody"
            },
            "notFoundTemplate": {
              "type": "constant",
              "value": "appNotFound"
            },
            "loadingTemplate": {
              "type": "constant",
              "value": "appLoading"
            }
          }
        },
        "routes": {
          "type": "array"
        },
        "onRun": {
          "type": "function"
        },
        "onData": {
          "type": "function"
        },
        "onBeforeAction": {
          "type": "function"
        },
        "onAfterAction": {
          "type": "function"
        },
        "onStop": {
          "type": "function"
        },
        "waitOn": {
          "type": "function"
        },
        "load": {
          "type": "function"
        },
        "before": {
          "type": "function"
        },
        "after": {
          "type": "function"
        },
        "unload": {
          "type": "function"
        },
        "constructor": {
          "type": "function",
          "refID": 23,
          "members": {
            "HOOK_TYPES": {
              "type": "array"
            },
            "LEGACY_HOOK_TYPES": {
              "type": "object",
              "members": {
                "load": {
                  "type": "constant",
                  "value": "onRun"
                },
                "before": {
                  "type": "constant",
                  "value": "onBeforeAction"
                },
                "after": {
                  "type": "constant",
                  "value": "onAfterAction"
                },
                "unload": {
                  "type": "constant",
                  "value": "onStop"
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 23
                },
                "start": {
                  "type": "function",
                  "refID": 27
                },
                "onRequest": {
                  "type": "function",
                  "refID": 29
                },
                "run": {
                  "type": "function",
                  "refID": 31
                },
                "stop": {
                  "type": "function",
                  "refID": 33
                },
                "onUnhandled": {
                  "type": "function",
                  "refID": 35
                },
                "onRouteNotFound": {
                  "type": "function",
                  "refID": 37
                },
                "configure": {
                  "type": "function",
                  "refID": 39
                },
                "convertTemplateName": {
                  "type": "function",
                  "refID": 41
                },
                "convertRouteControllerName": {
                  "type": "function",
                  "refID": 43
                },
                "setNameConverter": {
                  "type": "function",
                  "refID": 45
                },
                "addHook": {
                  "type": "function",
                  "refID": 47
                },
                "getHooks": {
                  "type": "function",
                  "refID": 49
                },
                "map": {
                  "type": "function",
                  "refID": 51
                },
                "route": {
                  "type": "function",
                  "refID": 53
                },
                "path": {
                  "type": "function",
                  "refID": 55
                },
                "url": {
                  "type": "function",
                  "refID": 57
                },
                "match": {
                  "type": "function",
                  "refID": 59
                },
                "dispatch": {
                  "type": "function",
                  "refID": 61
                }
              }
            }
          }
        },
        "start": {
          "ref": 27
        },
        "onRequest": {
          "ref": 29
        },
        "run": {
          "ref": 31
        },
        "stop": {
          "ref": 33
        },
        "onUnhandled": {
          "ref": 35
        },
        "onRouteNotFound": {
          "ref": 37
        },
        "configure": {
          "ref": 39
        },
        "convertTemplateName": {
          "ref": 41
        },
        "convertRouteControllerName": {
          "ref": 43
        },
        "setNameConverter": {
          "ref": 45
        },
        "addHook": {
          "ref": 47
        },
        "getHooks": {
          "ref": 49
        },
        "map": {
          "ref": 51
        },
        "route": {
          "ref": 53
        },
        "path": {
          "ref": 55
        },
        "url": {
          "ref": 57
        },
        "match": {
          "ref": 59
        },
        "dispatch": {
          "ref": 61
        }
      }
    },
    "Utils": {
      "type": "object",
      "members": {
        "assert": {
          "type": "function"
        },
        "warn": {
          "type": "function"
        },
        "notifyDeprecated": {
          "type": "function"
        },
        "withDeprecatedNotice": {
          "type": "function"
        },
        "resolveValue": {
          "type": "function"
        },
        "hasOwnProperty": {
          "type": "function"
        },
        "inherits": {
          "type": "function"
        },
        "toArray": {
          "type": "function"
        },
        "typeOf": {
          "type": "function"
        },
        "extend": {
          "type": "function"
        },
        "create": {
          "type": "function"
        },
        "capitalize": {
          "type": "function"
        },
        "upperCamelCase": {
          "type": "function"
        },
        "camelCase": {
          "type": "function"
        },
        "pick": {
          "type": "function"
        },
        "StringConverters": {
          "type": "object",
          "members": {
            "none": {
              "type": "function"
            },
            "upperCamelCase": {
              "type": "function"
            },
            "camelCase": {
              "type": "function"
            }
          }
        },
        "rewriteLegacyHooks": {
          "type": "function"
        }
      }
    },
    "IronRouter": {
      "type": "function",
      "refID": 0,
      "members": {
        "HOOK_TYPES": {
          "type": "array"
        },
        "LEGACY_HOOK_TYPES": {
          "type": "object",
          "members": {
            "load": {
              "type": "constant",
              "value": "onRun"
            },
            "before": {
              "type": "constant",
              "value": "onBeforeAction"
            },
            "after": {
              "type": "constant",
              "value": "onAfterAction"
            },
            "unload": {
              "type": "constant",
              "value": "onStop"
            }
          }
        },
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "start": {
              "type": "function"
            },
            "onRequest": {
              "type": "function"
            },
            "run": {
              "type": "function"
            },
            "stop": {
              "type": "function"
            },
            "onUnhandled": {
              "type": "function"
            },
            "onRouteNotFound": {
              "type": "function"
            },
            "configure": {
              "type": "function"
            },
            "convertTemplateName": {
              "type": "function"
            },
            "convertRouteControllerName": {
              "type": "function"
            },
            "setNameConverter": {
              "type": "function"
            },
            "addHook": {
              "type": "function"
            },
            "getHooks": {
              "type": "function"
            },
            "map": {
              "type": "function"
            },
            "route": {
              "type": "function"
            },
            "path": {
              "type": "function"
            },
            "url": {
              "type": "function"
            },
            "match": {
              "type": "function"
            },
            "dispatch": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "npm-bcrypt": {
    "NpmModuleBcrypt": {
      "type": "object",
      "members": {
        "gen_salt_sync": {
          "type": "function"
        },
        "genSaltSync": {
          "type": "function"
        },
        "gen_salt": {
          "type": "function"
        },
        "genSalt": {
          "type": "function"
        },
        "encrypt_sync": {
          "type": "function"
        },
        "hashSync": {
          "type": "function"
        },
        "encrypt": {
          "type": "function"
        },
        "hash": {
          "type": "function"
        },
        "compare_sync": {
          "type": "function"
        },
        "compareSync": {
          "type": "function"
        },
        "compare": {
          "type": "function"
        },
        "get_rounds": {
          "type": "function"
        },
        "getRounds": {
          "type": "function"
        }
      }
    }
  },
  "accounts-base": {
    "Accounts": {
      "type": "object",
      "members": {
        "config": {
          "type": "function"
        },
        "LoginCancelledError": {
          "type": "function",
          "members": {
            "numericError": {
              "type": "constant",
              "value": 145546287
            }
          }
        },
        "validateLoginAttempt": {
          "type": "function"
        },
        "onLogin": {
          "type": "function"
        },
        "onLoginFailure": {
          "type": "function"
        },
        "registerLoginHandler": {
          "type": "function"
        },
        "destroyToken": {
          "type": "function"
        },
        "onCreateUser": {
          "type": "function"
        },
        "insertUserDoc": {
          "type": "function"
        },
        "validateNewUser": {
          "type": "function"
        },
        "updateOrCreateUserFromExternalService": {
          "type": "function"
        },
        "addAutopublishFields": {
          "type": "function"
        },
        "urls": {
          "type": "object",
          "members": {
            "resetPassword": {
              "type": "function"
            },
            "verifyEmail": {
              "type": "function"
            },
            "enrollAccount": {
              "type": "function"
            }
          }
        },
        "emailTemplates": {
          "type": "object",
          "members": {
            "from": {
              "type": "constant",
              "value": "Meteor Accounts <no-reply@meteor.com>"
            },
            "siteName": {
              "type": "constant",
              "value": "localhost:3000"
            },
            "resetPassword": {
              "type": "object",
              "members": {
                "subject": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                }
              }
            },
            "verifyEmail": {
              "type": "object",
              "members": {
                "subject": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                }
              }
            },
            "enrollAccount": {
              "type": "object",
              "members": {
                "subject": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                }
              }
            }
          }
        },
        "setPassword": {
          "type": "function"
        },
        "sendResetPasswordEmail": {
          "type": "function"
        },
        "sendEnrollmentEmail": {
          "type": "function"
        },
        "sendVerificationEmail": {
          "type": "function"
        },
        "createUser": {
          "type": "function"
        },
        "loginServiceConfiguration": {
          "type": "object",
          "members": {
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            },
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "allow": {
              "type": "function"
            },
            "deny": {
              "type": "function"
            }
          }
        },
        "ConfigError": {
          "type": "function"
        }
      }
    },
    "AccountsTest": {
      "type": "undefined"
    }
  },
  "sha": {
    "SHA256": {
      "type": "function"
    }
  },
  "srp": {
    "SRP": {
      "type": "object",
      "members": {
        "generateVerifier": {
          "type": "function"
        },
        "matchVerifier": {
          "type": "object",
          "members": {
            "identity": {
              "type": "function",
              "refID": 4
            },
            "salt": {
              "ref": 4
            },
            "verifier": {
              "ref": 4
            }
          }
        }
      }
    }
  },
  "email": {
    "Email": {
      "type": "object",
      "members": {
        "send": {
          "type": "function"
        }
      }
    },
    "EmailTest": {
      "type": "object",
      "members": {
        "overrideOutputStream": {
          "type": "function"
        },
        "restoreOutputStream": {
          "type": "function"
        },
        "hookSend": {
          "type": "function"
        }
      }
    }
  },
  "accounts-password": {},
  "velocity:core": {
    "Velocity": {
      "type": "object",
      "members": {
        "startup": {
          "type": "function"
        },
        "getAppPath": {
          "type": "function"
        },
        "getTestsPath": {
          "type": "function"
        },
        "postProcessors": {
          "type": "array"
        },
        "addPostProcessor": {
          "type": "function"
        },
        "getReportGithubIssueMessage": {
          "type": "function"
        },
        "registerTestingFramework": {
          "type": "function"
        },
        "onTest": {
          "type": "function"
        },
        "Mirror": {
          "type": "object",
          "members": {
            "start": {
              "type": "function"
            }
          }
        },
        "ProxyPackageSync": {
          "type": "object",
          "members": {
            "regeneratePackageJs": {
              "type": "function"
            }
          }
        }
      }
    },
    "VelocityTestFiles": {
      "type": "object",
      "members": {
        "find": {
          "type": "function"
        },
        "findOne": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "update": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "upsert": {
          "type": "function"
        },
        "allow": {
          "type": "function"
        },
        "deny": {
          "type": "function"
        }
      }
    },
    "VelocityFixtureFiles": {
      "type": "object",
      "members": {
        "find": {
          "type": "function"
        },
        "findOne": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "update": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "upsert": {
          "type": "function"
        },
        "allow": {
          "type": "function"
        },
        "deny": {
          "type": "function"
        }
      }
    },
    "VelocityTestReports": {
      "type": "object",
      "members": {
        "find": {
          "type": "function"
        },
        "findOne": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "update": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "upsert": {
          "type": "function"
        },
        "allow": {
          "type": "function"
        },
        "deny": {
          "type": "function"
        }
      }
    },
    "VelocityAggregateReports": {
      "type": "object",
      "members": {
        "find": {
          "type": "function"
        },
        "findOne": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "update": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "upsert": {
          "type": "function"
        },
        "allow": {
          "type": "function"
        },
        "deny": {
          "type": "function"
        }
      }
    },
    "VelocityLogs": {
      "type": "object",
      "members": {
        "find": {
          "type": "function"
        },
        "findOne": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "update": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "upsert": {
          "type": "function"
        },
        "allow": {
          "type": "function"
        },
        "deny": {
          "type": "function"
        }
      }
    },
    "VelocityMirrors": {
      "type": "object",
      "members": {
        "find": {
          "type": "function"
        },
        "findOne": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "update": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "upsert": {
          "type": "function"
        },
        "allow": {
          "type": "function"
        },
        "deny": {
          "type": "function"
        }
      }
    }
  },
  "velocity:shim": {},
  "mike:mocha": {
    "MochaWeb": {
      "type": "object",
      "members": {
        "MeteorCollectionTestReporter": {
          "type": "function"
        },
        "testOnly": {
          "type": "function"
        }
      }
    },
    "MeteorCollectionTestReporter": {
      "type": "undefined"
    }
  },
  "coffeescript": {},
  "practicalmeteor:loglevel": {
    "loglevel": {
      "type": "object",
      "members": {
        "createLogger": {
          "type": "function"
        },
        "createPackageLogger": {
          "type": "function"
        },
        "createAppLogger": {
          "type": "function"
        }
      }
    }
  },
  "velocity:meteor-stubs": {
    "MeteorStubs": {
      "type": "object",
      "members": {
        "install": {
          "type": "function"
        },
        "uninstall": {
          "type": "function"
        }
      }
    }
  },
  "alanning:package-stubber": {
    "PackageStubber": {
      "type": "object",
      "members": {
        "functionReplacementStr": {
          "type": "constant",
          "value": "function emptyFn () {}"
        },
        "validate": {
          "type": "object",
          "members": {
            "stubPackages": {
              "type": "function"
            },
            "deepCopyReplaceFn": {
              "type": "function"
            }
          }
        },
        "stubPackages": {
          "type": "function"
        },
        "listTestPackages": {
          "type": "function"
        },
        "listPackages": {
          "type": "function"
        },
        "listPackageExports": {
          "type": "function"
        },
        "deepCopyReplaceFn": {
          "type": "function"
        },
        "shouldIgnorePackage": {
          "type": "function"
        },
        "replaceFnPlaceholders": {
          "type": "function"
        },
        "stubGenerators": {
          "type": "object",
          "members": {
            "function": {
              "type": "function"
            },
            "object": {
              "type": "function"
            },
            "string": {
              "type": "function"
            },
            "number": {
              "type": "function"
            },
            "undefined": {
              "type": "function"
            }
          }
        },
        "generateStubJsCode": {
          "type": "function"
        }
      }
    }
  },
  "sanjo:karma": {
    "Karma": {
      "type": "object",
      "members": {
        "start": {
          "type": "function"
        },
        "setConfig": {
          "type": "function"
        }
      }
    },
    "KarmaInternals": {
      "type": "object",
      "members": {
        "karmaChilds": {
          "type": "object",
          "members": {
            "jasmine-client-unit": {
              "type": "object",
              "members": {
                "taskName": {
                  "type": "constant",
                  "value": "jasmine-client-unit"
                },
                "appPath": {
                  "type": "constant",
                  "value": "/Users/stephan/Documents/Code/github/meteor-ci-test/app"
                },
                "pid": {
                  "type": "constant",
                  "value": 13454
                },
                "fout": {
                  "type": "constant",
                  "value": 41
                },
                "child": {
                  "type": "object",
                  "members": {
                    "domain": {
                      "type": "null",
                      "value": null
                    },
                    "signalCode": {
                      "type": "null",
                      "value": null
                    },
                    "exitCode": {
                      "type": "null",
                      "value": null
                    },
                    "pid": {
                      "type": "constant",
                      "value": 13454
                    },
                    "stdin": {
                      "type": "null",
                      "value": null
                    },
                    "stdout": {
                      "type": "null",
                      "value": null
                    },
                    "stderr": {
                      "type": "null",
                      "value": null
                    },
                    "stdio": {
                      "type": "array"
                    },
                    "spawn": {
                      "type": "function"
                    },
                    "kill": {
                      "type": "function"
                    },
                    "ref": {
                      "type": "function"
                    },
                    "unref": {
                      "type": "function"
                    },
                    "setMaxListeners": {
                      "type": "function"
                    },
                    "emit": {
                      "type": "function"
                    },
                    "addListener": {
                      "type": "function",
                      "refID": 17
                    },
                    "on": {
                      "ref": 17
                    },
                    "once": {
                      "type": "function"
                    },
                    "removeListener": {
                      "type": "function"
                    },
                    "removeAllListeners": {
                      "type": "function"
                    },
                    "listeners": {
                      "type": "function"
                    }
                  }
                },
                "getTaskName": {
                  "type": "function"
                },
                "getChild": {
                  "type": "function"
                },
                "getPid": {
                  "type": "function"
                },
                "isDead": {
                  "type": "function"
                },
                "isRunning": {
                  "type": "function"
                },
                "readPid": {
                  "type": "function"
                },
                "spawn": {
                  "type": "function"
                },
                "kill": {
                  "type": "function"
                }
              }
            }
          }
        },
        "getKarmaChild": {
          "type": "function"
        },
        "setKarmaChild": {
          "type": "function"
        },
        "startKarmaServer": {
          "type": "function"
        },
        "writeKarmaConfig": {
          "type": "function"
        },
        "generateKarmaConfig": {
          "type": "function"
        },
        "readKarmaConfig": {
          "type": "function"
        },
        "getConfigPath": {
          "type": "function"
        },
        "getAppPath": {
          "type": "function"
        },
        "getKarmaPath": {
          "type": "function"
        }
      }
    }
  },
  "sanjo:jasmine": {
    "Jasmine": {
      "type": "object",
      "members": {
        "onTest": {
          "type": "function"
        }
      }
    }
  },
  "velocity:html-reporter": {},
  "session": {},
  "livedata": {
    "DDP": {
      "type": "object",
      "members": {
        "ConnectionError": {
          "type": "function",
          "refID": 1,
          "members": {
            "captureStackTrace": {
              "type": "function",
              "refID": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                }
              }
            }
          }
        },
        "ForcedReconnectError": {
          "type": "function",
          "refID": 7,
          "members": {
            "captureStackTrace": {
              "ref": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "ref": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 7
                }
              }
            }
          }
        },
        "randomStream": {
          "type": "function"
        },
        "connect": {
          "type": "function"
        }
      }
    },
    "DDPServer": {
      "type": "object"
    },
    "LivedataTest": {
      "type": "undefined"
    }
  },
  "service-configuration": {
    "ServiceConfiguration": {
      "type": "object",
      "members": {
        "configurations": {
          "type": "object",
          "members": {
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            },
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "allow": {
              "type": "function"
            },
            "deny": {
              "type": "function"
            }
          }
        },
        "ConfigError": {
          "type": "function"
        }
      }
    }
  },
  "velocity:test-proxy": {},
  "velocity:node-soft-mirror": {}
}
var globalContext = (typeof global !== 'undefined') ? global : window

for (var packageName in packageMetadata) {
  for (var packageExportName in packageMetadata[packageName]) {
    var packageExport = packageMetadata[packageName][packageExportName]
    globalContext[packageExportName] = ComponentMocker.generateFromMetadata(packageExport)
  }
}
