const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method == "GET") {
    // mengambil data
  } else if (req.method == "POST") {
    //menambahkan data
  } else if (req.method == "PUT") {
    //mengganti seluruh data yang dituju
  } else if (req.method == "PATCH") {
    //memperbaharui sebagian data
  } else if (req.method == "DELETE") {
    //meghapus data
  }
});
