import { useEffect, useState } from 'react'; // นำเข้า useEffect และ useState จาก React เพื่อใช้ในการจัดการ state และ side effects
import { Link } from 'react-router-dom'; // นำเข้า Link เพื่อใช้ลิงก์ในการนำทางระหว่างหน้า
import axios from 'axios'; // นำเข้า axios สำหรับทำ HTTP requests

const HomePage = () => {
  // สร้าง state สำหรับเก็บข้อมูลหนังสือ, สถานะการโหลด, และข้อผิดพลาด
  const [books, setBooks] = useState([]); // เก็บข้อมูลหนังสือในรูปแบบ array
  const [loading, setLoading] = useState(true); // สถานะการโหลดข้อมูลเริ่มต้นเป็น true
  const [error, setError] = useState(null); // เก็บข้อผิดพลาดในรูปแบบ null โดยเริ่มต้นไม่มีข้อผิดพลาด

  // ใช้ useEffect ในการเรียกข้อมูลจาก API เมื่อหน้าเว็บถูกโหลด
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/books'); // เรียก API
        setBooks(response.data); // เก็บข้อมูลหนังสือใน state books
        setLoading(false); // เปลี่ยนสถานะการโหลดเป็น false เพราะข้อมูลเสร็จสมบูรณ์
      } catch (error) {
        console.error('Error fetching data:', error); // แสดงข้อผิดพลาดใน console
        setError(error); // เก็บข้อผิดพลาดใน state error
        setLoading(false); // เปลี่ยนสถานะการโหลดเป็น false
      }
    };

    fetchBooks(); // เรียกใช้ฟังก์ชัน fetchBooks
  }, []); // [] หมายความว่า useEffect นี้จะทำงานเพียงครั้งเดียวเมื่อหน้าเว็บถูกโหลดครั้งแรก

  // กรณีที่กำลังโหลดข้อมูล
  if (loading) {
    return <div>กำลังโหลดข้อมูล...</div>; // แสดงข้อความเมื่อข้อมูลกำลังโหลด
  }

  // กรณีที่เกิดข้อผิดพลาด
  if (error) {
    return <div>เกิดข้อผิดพลาด: {error.message}</div>; // แสดงข้อความเมื่อเกิดข้อผิดพลาด
  }

  // ส่วนการแสดงผลของหน้า HomePage
  return (
    <div className="w-full p-4">
      {/* แถบเมนูด้านบนสำหรับการนำทาง */}
      <nav className="w3-bar w3-black mb-6">
        <a href="/" className="w3-bar-item w3-button">Home</a> {/* ลิงก์ไปหน้า Home */}
        <a href="/admin-dashboard" className="w3-bar-item w3-button">Admin</a> {/* ลิงก์ไปหน้า Admin */}
      </nav>

      {/* แสดงภาพซ้อนทับข้อความ */}
      <section style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
        <img
          src="https://images.unsplash.com/photo-1692912364084-97b9ae31a8e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Welcome to Hippo Book" // ข้อความที่แสดงเมื่อภาพไม่โหลด
          style={{ width: '100%', height: '700px', objectFit: 'cover', objectPosition: '80% 40%' }} // จัดตำแหน่งภาพให้พอดีกับพื้นที่
        />
        <div style={{
          position: 'absolute', // วางตำแหน่งแบบ absolute บนภาพ
          top: '55%', // ตำแหน่งจากด้านบน
          left: '25%', // ตำแหน่งจากด้านซ้าย
          transform: 'translate(-50%, -50%)', // จัดกึ่งกลาง
          color: 'white', // สีของข้อความ
          fontFamily: '"Cinzel", serif', // ฟอนต์ของข้อความ
          fontSize: '58px', // ขนาดของข้อความ
          fontWeight: 'bold', // ตัวหนา
          textShadow: '4px 4px 6px rgba(0, 0, 0, 0.7)', // เงาของข้อความ
        }}>
          Welcome To Hippo Book
        </div>
        <div style={{
          position: 'absolute',
          top: '65%',
          left: '13%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontFamily: '"Cinzel Decorative", serif',
          fontSize: '19px',
          textShadow: '6px 6px 9px rgba(0, 0, 0, 0.8)',
        }}>
          by Saranphat Suksaengsi
        </div>

        {/* แสดงหนังสือที่มุมขวาล่าง */}
        <div style={{
          position: 'absolute',
          top: '60%',
          bottom: '20px',
          right: '90px',
          display: 'flex',
          flexDirection: 'row',
          gap: '15px',
        }}>
          {["/images/model 1.jpg", "/images/model 1.jpg", "/images/model 1.jpg", "/images/model 1.jpg"].map((src, index) => (
            <div key={index} style={{
              width: '190px',
              height: '250px',
              overflow: 'hidden',
              borderRadius: '0px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)', // เงาของกล่องหนังสือ
            }}>
              <img
                src={src}
                alt={`Book cover ${index + 1}`} // ข้อความที่แสดงเมื่อภาพปกหนังสือไม่โหลด
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} // จัดให้ภาพปกหนังสือพอดีกับกล่อง
              />
            </div>
          ))}
        </div>
      </section>

      {/* รายการหนังสือทั้งหมด */}
      <h1 className="text-2xl font-bold mb-4">รายการหนังสือ</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.length > 0 ? (
          books.map((book) => ( // ลูปเพื่อแสดงหนังสือทั้งหมด
            <li key={book.id} className="border p-4 rounded shadow-lg flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-2 text-center">{book.title}</h2> {/* ชื่อหนังสือ */}
              <Link to={`/books/${book.id}`}> {/* ลิงก์ไปยังหน้ารายละเอียดหนังสือ */}
                <img 
                  src={book.coverImage} // แสดงภาพปกหนังสือ
                  alt={book.title} // ข้อความเมื่อภาพไม่โหลด
                  className="w-40 h-60 object-cover mb-2 cursor-pointer" // สไตล์ของภาพปกหนังสือ
                />
              </Link>
              <p className="text-lg text-green-600">฿{book.price}</p> {/* แสดงราคาของหนังสือ */}
              <p className="text-sm text-gray-700 text-center">{book.description}</p> {/* คำอธิบายหนังสือ */}
            </li>
          ))
        ) : (
          <p>ไม่มีหนังสือในระบบ</p> // แสดงข้อความเมื่อไม่พบหนังสือ
        )}
      </ul>
    </div>
  );
};

export default HomePage; // ส่งออกคอมโพเนนต์ HomePage เพื่อใช้ในที่อื่น
