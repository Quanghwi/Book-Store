import Product from '../models/product.model.js'
import productValidation from '../validations/product.validation.js';
export const getAllProduct = async (req, res) => {
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

export const getDetailProduct = async (req, res) => {
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

export const createProduct = async (req, res) => {
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
// xóa cứng
export const deleteRealProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "Sản phẩm đã được xóa thành công",
            product,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};

// xóa mềm
export const deleteFakeProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,
            {
                is_deleted: true
            },
            { new: true });
        console.log(product);
        return res.status(200).json(
            {
                message: 'Xóa mềm sản phẩm thành công',
                data: product
            });
    } catch (error) {
        next(error);
    }
}
// khôi phục sản phẩm
export const restoreProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,
            {
                is_deleted: false
            },
            { new: true });
        console.log(product);
        return res.status(200).json(
            {
                message: 'Khôi phục sản phẩm thành công',
                data: product
            });
    } catch (error) {
        next(error);
    }
}

// cập nhật sản phẩm
export const updateProduct = async (req, res) => {
    const { error } = productValidation.validate(req.body)
        if (error) {
            return res.status(400).json({
                message: error.details[0].message
            })
        }
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!product) {
        return res.status(404).json({
          message: "Không tìm thấy sản phẩm",
        });
      }
      return res.status(200).json({
        message: "Sản phẩm đã được cập nhật thành công",
        data: product,
      });
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  };