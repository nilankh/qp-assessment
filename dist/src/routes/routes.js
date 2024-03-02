"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = require("../controller/admin_controller");
const router = (0, express_1.Router)();
router.route('/admin/add/grocery').get(admin_controller_1.createGrocery);
exports.default = router;
