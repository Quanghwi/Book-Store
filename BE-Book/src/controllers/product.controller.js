import Product from '../models/product.model.js'
import productValidation from '../validations/product.validation.js';
export const getAll = async (req, res) => {
    try {
        const products = await Product.find();
        if (products.length == 0) {
            return res.status(400).json({
                message: "Không có sản phẩm nào"
            })
        }
        return res.status(200).json({
            message: " tìm sản phẩm thành công",
            data: products
        })
    } catch (error) {
        res.status(500).json({
            message: "Lỗi server"
        })
    }
}

export const getDetail = async (req, res) => {
    try {
        const products = await Product.findById(req.params.id);
        if (!products) {
            return res.status(400).json({
                message: "Không tìm thấy sản phẩm"
            })
        }
        return res.status(200).json({
            message: " tìm sản phẩm thành công",
            data: products
        })
    } catch (error) {
        res.status(500).json({
            message: "Lỗi server"
        })
    }
}

export const create = async (req, res) => {
    try {
        const { error } = productValidation.validate(req.body)
        if (error) {
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        const product = await Product.create(req.body);
        console.log(product);
        if (!product) {
            return res.status(400).json({
                message: "Không thêm được sản phẩm"
            })
        }
        return res.status(200).json({
            message: " Thêm sản phẩm thành công",
            data: product
        })
    } catch (error) {
        res.status(500).json({
            message: "Lỗi server"
        })
    }
}