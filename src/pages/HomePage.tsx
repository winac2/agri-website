import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const HomePage: React.FC = () => {
  const supplyChainData = [
    {
      id: 1,
      title: 'Thông tin ',
      icon: '🏡',
      image: 'https://drive.google.com/thumbnail?id=1E8kNcqaxzeV7ZYOM68d22uGXv-R0Apop',
      location: 'Nguyên liệu chính: Cơm dừa, tinh bột sắn, mè, gia vị',
      gln: 'Nguồn gốc: Nguyên liệu được lựa chọn và làm sạch tại trang trại',
      controlId: 'Thông tin bổ sung: Cơm dừa được làm sạch, xay để lấy nước cốt dừa phục vụ sản xuất bánh',
      time: 'Thời gian bán: 01/08/2025 19:05'
    },
    {
      id: 2,
      title: 'Cơ sở sơ chế',
      icon: '🏭',
      image: 'https://drive.google.com/thumbnail?id=1wbqeGiyV_OkvxySAaJgXUhEHFPFlP4iI',
      location: 'Quy trình sơ chế:',
      gln: 'Cơm dừa được xay lấy nước cốt',
      controlId: 'Tinh bột sắn, mè và gia vị được làm sạch',
      time: 'Trộn hỗn hợp: Nước cốt dừa + Tinh bột sắn + Mè + Gia vị'
    },
    {
      id: 3,
      title: 'Các bước sản xuất',
      icon: '🏢',
      image: 'https://drive.google.com/thumbnail?id=1TrzHYpwpoZh2eJ_rp94QyGxXA8I99s1_',
      location: 'Tráng bánh. Sấy lần 1 ở nhiệt độ 55°C - 65°C',
      gln: 'Cắt và định hình bánh. Sấy lần 2 ở nhiệt độ 40°C - 50°C',
      controlId: 'Bán thành phẩm: Bánh tráng nước dừa sống',
      time: 'Nướng bánh, Đóng gói thành phẩm'
    },
    {
      id: 4,
      title: 'Thông tin thời gian',
      icon: '🌐',
      image: 'https://drive.google.com/thumbnail?id=1VuGy9pP8i9jMAE65gPuUT6ICuoQJ7mba',
      location: 'Thời gian sản xuất: 26/07/2025 9:07',
      gln: '',
      controlId: '',
      time: 'Thời gian bán: 01/08/2025 19:05'
    },
  ];

  return (
    <Container fluid className="px-3 py-2">
      {/* Hero Image Section */}
      <Row className="mb-4">
        <Col>
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="position-relative">
              {/* Background Image */}
              <div 
                className="w-100"
                style={{
                  height: '200px',
                  backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="d-flex align-items-center justify-content-center h-100">
                  <div className="text-center text-white px-3">
                    <h1 className="h3 fw-bold mb-2">Chuỗi Cung Ứng Nông Sản</h1>
                    <p className="small mb-3">Theo dõi hành trình từ trang trại đến bàn ăn của bạn</p>
                    <Button variant="light" size="sm" className="fw-bold">
                      Tìm hiểu thêm
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Header Section */}
      <Row className="mb-3">
        <Col>
          <Card className="border-0 bg-light">
            <Card.Body className="d-flex align-items-center p-3">
              <div className="me-3">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                     style={{ width: '32px', height: '32px' }}>
                  <span className="text-white small">🌐</span>
                </div>
              </div>
              <div>
                <h6 className="mb-0 fw-bold small">Dữ liệu được hiển thị được chứng nhận bởi Doanh nghiệp.</h6>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Supply Chain Flow */}
      <Row>
        <Col>
          <div className="position-relative">
            {/* Supply Chain Stages */}
            {supplyChainData.map((stage) => (
              <div key={stage.id} className="position-relative mb-3">
                <Row className="align-items-start">
                  {/* Icon Circle */}
                  <Col xs={3} sm={2} className="text-center position-relative" style={{ zIndex: 2 }}>
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto"
                         style={{ width: '50px', height: '50px' }}>
                      <span className="text-white fs-6">{stage.icon}</span>
                    </div>
                  </Col>
                  
                  {/* Content Card */}
                  <Col xs={9} sm={10}>
                    <Card className="border-0 shadow-sm h-100">
                      <Card.Body className="p-3">
                        {/* Mobile Layout - Stacked */}
                        <div className="d-block d-md-none">
                          {/* Image Section */}
                          <div className="mb-3">
                            <img 
                              src={stage.image} 
                              alt={stage.title}
                              className="rounded w-100"
                              style={{ 
                                height: '120px', 
                                objectFit: 'cover' 
                              }}
                            />
                          </div>
                          
                          {/* Text Information */}
                          <div className="mb-3">
                            <h6 className="fw-bold mb-2 small">{stage.title}</h6>
                            <p className="text-muted small mb-1">{stage.location}</p>
                            {stage.gln && <p className="text-muted small mb-1">{stage.gln}</p>}
                            {stage.controlId && <p className="text-muted small mb-1">{stage.controlId}</p>}
                            <p className="text-muted small mb-0">{stage.time}</p>
                          </div>
                          
                          {/* Button */}
                          <Button 
                            variant="outline-primary" 
                            size="sm"
                            className="w-100"
                          >
                            Xem thêm
                          </Button>
                        </div>

                        {/* Desktop Layout - Horizontal */}
                        <div className="d-none d-md-flex justify-content-between align-items-start">
                          {/* Image Section */}
                          <div className="me-3" style={{ width: '220px', flexShrink: 0 }}>
                            <img 
                              src={stage.image} 
                              alt={stage.title}
                              className="rounded"
                              style={{ 
                                width: '100%', 
                                height: '160px', 
                                objectFit: 'cover' 
                              }}
                            />
                          </div>
                          
                          {/* Text Information */}
                          <div className="flex-grow-1">
                            <h6 className="fw-bold mb-2">{stage.title}</h6>
                            <p className="text-muted small mb-1">{stage.location}</p>
                            {stage.gln && <p className="text-muted small mb-1">{stage.gln}</p>}
                            {stage.controlId && <p className="text-muted small mb-1">{stage.controlId}</p>}
                            <p className="text-muted small mb-0">{stage.time}</p>
                          </div>
                          
                          {/* Button */}
                          <Button 
                            variant="outline-primary" 
                            size="sm"
                            className="ms-2"
                          >
                            Xem thêm
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage; 