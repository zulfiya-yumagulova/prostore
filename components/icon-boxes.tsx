import { Headset, PoundSterling, ShoppingBag, WalletCards } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const IconBoxes = () => {
  return (
    <Card>
      <CardContent className="grid md:grid-cols-4 gap-4 p-4">
        <div className="space-y-2">
          <ShoppingBag />
          <div className="text-sm text-bold">Free Shipping</div>
          <div className="text-sm text-muted-foreground">
            Free shipping on orders above £100
          </div>
        </div>
        <div className="space-y-2">
          <PoundSterling />
          <div className="text-sm text-bold">Money Back GuaranteeSur</div>
          <div className="text-sm text-muted-foreground">
            Within 30 days putchase
          </div>
        </div>
        <div className="space-y-2">
          <WalletCards />
          <div className="text-sm text-bold">Flexible Payments</div>
          <div className="text-sm text-muted-foreground">
            FPay with credit card, PayPal or COD
          </div>
        </div>
        <div className="space-y-2">
          <Headset />
          <div className="text-sm text-bold">Support</div>
          <div className="text-sm text-muted-foreground">
            Get support any time
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IconBoxes;
