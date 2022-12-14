const express=require('express')
const router=express.Router()
const {getUserById, pushOrderInPurchaseList}= require("../controllers/user")
const {isAuthenticated,isSignedIn,isAdmin}= require("../controllers/auth")
const {updateStock} =require("../controllers/product")
const {getOrderById, createOrder,getAllOrder,updateStatus,getOrderStatus} =require("../controllers/order")

router.param("userId",getUserById)
router.param("orderId",getOrderById)


router.post("/order/create/:userId",isSignedIn,isAuthenticated,pushOrderInPurchaseList,updateStock,createOrder)

router.get("/order/all/:userId",isSignedIn,isAuthenticated,isAdmin,getAllOrder)

//status of order

router.get("/order/status/:userId",isSignedIn,isAuthenticated,isAdmin,getOrderStatus)
router.put("/order/:orderId/status/:userId",isSignedIn,isAuthenticated,isAdmin,updateStatus)
module.exports =router;