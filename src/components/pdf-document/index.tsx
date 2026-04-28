import type { FunctionComponent } from "react";
import {
  Document,
  Page,
  Link,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  headerRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  headerCol: {
    width: "50%",
  },
  underlineText: {
    textDecoration: "underline",
    fontWeight: 700,
    fontSize: 12,
  },

  footer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  link: {
    textDecoration: "underline",
    fontSize: 10,
  },

  bottomTableColumnHeading: {
    textTransform: "uppercase",
    fontWeight: 600,
  },
  // Data Row (6 Columns)
  dataRow: {
    flexDirection: "row",
    paddingVertical: 5,
    alignItems: "center",
  },
  // We distribute widths to ensure all 6 columns fit
  headCol1: { width: "10%", fontWeight: 600 },
  headCol2: { width: "20%", fontWeight: 600 },
  headCol3: { width: "15%", fontWeight: 600 },
  headCol4: { width: "15%", fontWeight: 600 },
  headCol5: { width: "10%", fontWeight: 600 },
  headCol6: { width: "15%", fontWeight: 600 },
  headCol7: { width: "15%", fontWeight: 600 },

  col1: { width: "60%" },
  col2: { width: "40%" },

  bottomCol1: { width: "30%" },
  bottomCol2: { width: "30%" },
  bottomCol3: { width: "40%" },
});

type Props = {
  startingInvoices?: number;
  startingDeliveryNotes?: number;
  startingDranetzReturns?: number;
  startingCreditNotes?: number;
  startingProforma?: number;
  noInvoices?: number;
  noReturns?: number;
};

const OutputDocument: FunctionComponent<Props> = ({
  startingInvoices = 5706,
  startingDeliveryNotes = 6493,
  startingDranetzReturns = 306,
  startingCreditNotes = 84,
  startingProforma = 302,
  noInvoices = 30,
  noReturns = 4,
}) => {
  const list = Array.from({ length: noInvoices }, (_, i) => i);

  const listReturns = Array.from({ length: noReturns }, (_, i) => i);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerRow}>
          <View style={styles.col1}>
            <Text style={styles.underlineText}>INVOICES</Text>
          </View>
          <View style={styles.col2}>
            <Text style={styles.underlineText}>DELIVERY NOTES</Text>
          </View>
        </View>

        <View style={styles.dataRow}>
          <Text style={styles.headCol1}>Inv No.</Text>
          <Text style={styles.headCol2}>Company</Text>
          <Text style={styles.headCol3}>Date</Text>
          <Text style={styles.headCol4}>Amount</Text>
          <Text style={styles.headCol5}>D/Note No.</Text>
          <Text style={styles.headCol6}>Company</Text>
          <Text style={styles.headCol7}>Date</Text>
        </View>

        {list.map((num) => (
          <View key={`invoices-${num}`} style={styles.dataRow}>
            <Text style={styles.col1}>
              {(startingInvoices + num).toString().padStart(5, "0")}
            </Text>
            <Text style={styles.col2}>
              {(startingDeliveryNotes + num).toString().padStart(5, "0")}
            </Text>
          </View>
        ))}

        <View style={styles.dataRow}>
          <View style={styles.bottomCol1}>
            <Text style={styles.bottomTableColumnHeading}>Dranetz Returns</Text>
          </View>
          <View style={styles.bottomCol2}>
            <Text style={styles.bottomTableColumnHeading}>Credit Notes</Text>
          </View>
          <View style={styles.bottomCol3}>
            <Text style={styles.bottomTableColumnHeading}>Proforma</Text>
          </View>
        </View>

        {listReturns.map((num) => (
          <View key={`bottom-table-${num}`} style={styles.dataRow}>
            <Text style={styles.bottomCol1}>
              R{(startingDranetzReturns + num).toString().padStart(4, "0")}
            </Text>
            <Text style={styles.bottomCol2}>
              C{(startingCreditNotes + num).toString().padStart(4, "0")}
            </Text>
            <Text style={styles.bottomCol3}>
              P{(startingProforma + num).toString().padStart(5, "0")}
            </Text>
          </View>
        ))}

        <View style={styles.footer} fixed>
          <Link src={window.location.origin} style={styles.link}>
            {window.location.origin}
          </Link>
        </View>
      </Page>
    </Document>
  );
};

export default OutputDocument;
