import _ from 'lodash'
import $ from 'jquery'
import * as chiang from './keyvalue'
import './index.scss'

var img1 = document.createElement("img");
img1.src = require("./1.jpg");
document.body.appendChild(img1);

chiang.sayHi()

function component() {
  var $element = $('<div/>')

 // Lodash, now imported by this script
      $element.html(_.join(['Hello', 'world'], ' '))

        return $element
	}

	$(document.body).append(component())
