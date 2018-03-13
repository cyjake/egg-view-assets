'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index.js');
  }

  async context() {
    await this.ctx.render('index.js', {
      data: 1,
    });
  }

}

module.exports = HomeController;
