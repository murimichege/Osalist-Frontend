import React from 'react'
import fake_logo from '../../../../icons/fake_logo.png'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    
  });
function InvoicePdf() {
 
      <Document>
    <Page size="A4" style={styles.page}>

     
    <View className="New-Invoice-container">
          <View className="New-Invoice-header">
            <View className="Fake-logo">
              <img src={fake_logo} alt="logo" />
            </View>
            <View className="New-Invoice-address">
              <h2>Invoice</h2>
              <View className="address">
                <p>
                  Keystone Park, 3rd floor, Block A,
                  <br />
                  Riverside Drive, Nairobi,
                  <br />
                  Kenya
                </p>
              </View>
            </View>
          </View>
          <hr style={{ align: "left" }} />
          <View className="main-container">
            <h4>Billed to</h4>
            <View className="new-item-links" style={{ marginLeft: "35px" }}>
              <h3>John Doe</h3>
            </View>
            <View className="new-invoice-form">
              <label for="address">Invoice #</label>
              <h3>1234567</h3>

              <label for="address">Invoice Date</label>
              <h3>23rd May 2022</h3>
            
            </View>

            <View className="new-invoice-client">
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Rate</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
              <td>Software License</td>
              <td>Annual renewal</td>
              <td>10 Licences</td>
              <td>Ksh 120,000 </td>
              <td></td>
            </tr>

                  
                </tbody>
              </table>
            </View>
            <View
              className="new-item-links"
              style={{ marginLeft: "35px", marginTop: "35px" }}
            >
              
            </View>
            <hr style={{ align: "left", marginTop: "70px", width: "35% " }} />

            <View className="new-invoice-subtotal">
              <View className="new-invoice-header">
                <p>Subtotal</p>
                <p>3,000,000</p>
              </View>

              <View className="new-invoice-total">
                <h2>V.A.T</h2>
                <p>
                  Kshs <span>20000</span>
                </p>
              </View>

              <View className="new-invoice-total">
                <h2>Discount</h2>
                <p>
                  Kshs <span>2000000</span>
                </p>
              </View>

              <View className="new-invoice-total">
                <h2>Total</h2>
                <p>
                  Kshs <span>000000</span>
                </p>
              </View>
              <hr style={{ align: "left", marginTop: "70px", width: "35% " }} />
            </View>
          </View>
          <View className="new-invoice-footer">
            <p style={{ fontWeight: "50px" }}>
              Thank you for patnering with us!
            </p>
          </View>
        
        </View>
        </Page>
        </Document>
    
  
}

export default InvoicePdf