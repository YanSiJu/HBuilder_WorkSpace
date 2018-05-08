/**
 * 添加产品使用的表单提交校验
 * @returns
 */
function productNameValidate() {
	if(document.getElementById("product_Name").value.toString().trim() == "") {
		//		alert("产品名称不能为空！");
		$("#name").text("产品名称不能为空！");
		document.getElementById("product_Name").focus();
		return false;
	}
}

function productPricevalidate() {

	var obj = document.getElementById("product_Price").value.toString();
	if(!isPriceNum(obj)) {
//		alert("请输入正确的价格!")
		$("#price").text("请输入正确的价格!！");
		return false;
	}
}
/**
 * 添加销售记录表单提交校验
 * @returns
 */
function validateSaleRecordForm() {
	var saleTime = document.getElementById("sale_Time").value.toString();
	if(!isDateTime(saleTime)) {
		alert("请输入正确的时间格式!");
		return false;
	}
	var saleManID = document.getElementById("sale_Man_ID").value.toString();
	if(!isNum(saleManID)) {
		alert("请输入正确的销售员编号!")
		return false;
	}
	var productID = document.getElementById("product_ID").value.toString();
	if(!isNum(productID)) {
		alert("请输入正确的产品编号!");
		return false;
	}
	var saleCount = document.getElementById("sale_count").value.toString();
	if(!isNum(saleCount)) {
		alert("请输入正确的销售数量!");
		return false;
	}
}
/**
 * 添加销售人员表单提交校验
 * @returns
 */
function validateSaleManForm() {
	var name = document.getElementById("sale_Name").value.toString();
	if(name.trim().length > 5 || name.trim().length < 2) {
		alert("姓名必须是2-5位!");
		document.getElementById("sale_Name").focus();
		return false;
	}
	var birth = document.getElementById("birth_Date").value.toString();

	if(!isBirthDate(birth)) {
		alert("请输入正确的出生日期格式,如2017-12-18!")
		return false;
	}
}

/**
 * 正则校验整数和正浮点数(保留两位)
 * @param obj
 * @returns
 */
function isPriceNum(obj) {
	var req = new RegExp("^[0-9]*[1-9][0-9]*$|^\\d+(\\.\\d{1,2})?$");
	var result = req.test(obj);
	return result;
}
/**
 * 校验形如2017-12-18 17:23格式的日期
 * @param obj
 * @returns
 */
function isDateTime(obj) {
	var req = new RegExp("^[1-9]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\\s+(20|21|22|23|[0-1]\\d):[0-5]\\d$");
	var result = req.test(obj);
	return result;
}
/**
 * 校验是不是正整数
 * @param obj
 * @returns
 */
function isNum(obj) {
	var req = new RegExp("^[0-9]*[1-9][0-9]*$");
	var result = req.test(obj);
	return result;
}
/**
 * 校验出生日期格式2017-12-18
 * @param obj
 * @returns
 */
function isBirthDate(obj) {
	var req = new RegExp("^[1-9]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$");
	var result = req.test(obj);
	return result;
}