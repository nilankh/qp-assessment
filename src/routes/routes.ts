import { Router } from "express";
import {adminCreateGrocery, getAllItemGrocery, deleteItemGrocery, updateItemGrocery, manageInventoryGrocery } from '../controller/admin_controller'
import {getAllGrocery, createUserOrder } from '../controller/user_controller'
const router = Router()

router.route('/admin/add/grocery').post(adminCreateGrocery)
router.route('/admin/grocery-items/all').get(getAllItemGrocery)
router.route('/admin/grocery-items/').delete(deleteItemGrocery)
router.route('/admin/grocery-items/').put(updateItemGrocery)
router.route('/admin/grocery-items/manage-inventory/').patch(manageInventoryGrocery)
router.route('/user/grocery-items').get(getAllGrocery)
router.route('/user/order').post(createUserOrder)

export default router