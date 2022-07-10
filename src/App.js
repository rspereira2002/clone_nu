import './App.css'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { BiHelpCircle } from 'react-icons/bi'
import { VscEye } from 'react-icons/vsc'
import { RiEyeCloseLine } from 'react-icons/ri'
import { AiOutlineRight } from 'react-icons/ai'
import { CgInfinity } from 'react-icons/cg'
import { ImBarcode } from 'react-icons/im'
import { TbTransferOut } from 'react-icons/tb'
import { TbTransferIn } from 'react-icons/tb'
import { MdSettingsCell } from 'react-icons/md'
import { FaMoneyCheckAlt } from 'react-icons/fa'
import { TbNetwork } from 'react-icons/tb'
import { GiNetworkBars } from 'react-icons/gi'
import { useState } from 'react'
import { BiCreditCardAlt } from 'react-icons/bi'
import { GiMeshNetwork } from 'react-icons/gi'
import { RiMoneyDollarBoxLine } from 'react-icons/ri'
import { TbCoin } from 'react-icons/tb'
import { BiHeart } from 'react-icons/bi'






function App() {

  const [VerValor, setVerValor] = useState(true);


  return (
    <div className='container'>
      <div className='menu'>

        <button className='ButtonLeft'>
         <AiOutlineUser />
        </button>

        <button onClick={() => setVerValor(!VerValor)} className='ButtonRight'>
          {VerValor ? <VscEye/> : <RiEyeCloseLine/>}
        </button>

        <button className='ButtonRight'>
          <BiHelpCircle />
        </button>

        <button className='ButtonRight'>
          <AiOutlineUsergroupAdd />
        </button>
      
        <p className='name'>Olá, Robson</p>
      </div>

      <div className='MenuSaldoConta'>
        <button className='AcessoConta'>
          <h3>conta</h3>
        </button>

        <button className='AcessoContaBnt'>
          <AiOutlineRight/>
        </button>
        
        {VerValor ? <p className='SaldoConta'> R$ 500,00</p> : <p className='SaldoConta2'> ******** </p>}
      </div>

      <div className='CarrosselBtnContainer'>
        <div className='CarrosselBtn'>

          <div className='AreaPix'>
            <div>
              <button className='CarrosselIcons'>
                <CgInfinity />
              </button>
            </div>

            <div className='CarrosselText'>
              <p> Área Pix </p>
            </div>
          </div>

          <div className='Pagar'>
            <div>
              <button className='CarrosselIcons'>
                <ImBarcode />
              </button>
            </div>

            <div className='CarrosselText'>
              <p> Pagar </p>
            </div>
          </div>

          <div className='Transferir'>
            <div>
              <button className='CarrosselIcons'>
                <TbTransferOut />
              </button>
            </div>

            <div className='CarrosselText'>
              <p> Transferir </p>
            </div>
          </div>

          <div className='Depositar'>
            <div>
              <button className='CarrosselIcons'>
                <TbTransferIn />
              </button>
            </div>

            <div className='CarrosselText'>
              <p> Depositar </p>
            </div>
          </div>

          <div className='RecargaCell'>
            <div>
              <button className='CarrosselIcons'>
                <MdSettingsCell />
              </button>
            </div>

            <div className='CarrosselText'>
              <p> Recarga de Celular </p>
            </div>
          </div>

          <div className='Cobrar'>
            <div>
              <button className='CarrosselIcons'>
                <FaMoneyCheckAlt />
              </button>
            </div>

            <div className='CarrosselText'>
              <p> Cobrar </p>
            </div>
          </div>

          <div className='TransferInter'>
            <div>
              <button className='CarrosselIcons'>
                <TbNetwork />
              </button>
            </div>

            <div className='CarrosselText'>
              <p> Transferir Internac.</p>
            </div>
          </div>

          <div className='Investir'>
            <div>
              <button className='CarrosselIcons'>
                <GiNetworkBars />
              </button>
            </div>

            <div className='CarrosselText'>
              <p> Investir </p>
            </div>
          </div>
        </div>
      </div>

      <div className='meuscartoes'>
        <button className='cartoes'> <BiCreditCardAlt/> Meus Cartões</button>
      </div>

      <div className='Carossel2Container'>
        <div className='carrossel2'>
          <button className='google'>
            <p><span className='trecho'>Google Pay:</span>pague sem tirar o cartão do bolso</p>
         </button>

          <button className='google'>
            <p>Salve seus amigos da burocracia. <span className='trecho'>Faça um convite para o Nubank.</span></p>
          </button>
        </div>
      </div>
      
      <div className='InvestimentoContainer'>
        <div>
          <button className='InvestimentoBtn'>
            <h3>Investimentos</h3>
          </button>
        
          <button className='InvestimentoBtnIcon'>
            <AiOutlineRight/>
          </button>
        </div>

        <p className='InvestimentoText'> O jeito Nu de investir: sem asteristicos, linguagem fácil e a partir de R$1. Saiba mais.</p>

        <div>
          <button className='PedacoNubank'>
          <span className='TrechoInvest'><GiMeshNetwork/></span> Meu Pedacionho do Nubank
          </button>
        </div>

        <div>
          <button className='SaldoInvestimento'>
          <span className='TrechoInvest'><RiMoneyDollarBoxLine/></span> Consultar saldo para transferência
          </button>
        </div>
      </div>

      <div className='CriptoContainer'>
        <div className='MoedaCriptoIcon'>
          <p> <TbCoin/> </p>
        </div>

        <div className='CriptoContainer2'>
          <button className='CriptoBtn'>
            <h3>Cripto</h3>
          </button>

          <button className='CriptoIcon'>
           <AiOutlineRight/>
          </button>

          <p className='CriptoText'>Compre com segurança a partir de R$1</p>
        </div>
      </div>

      <div className='SegurosContainer'>
        <h3 className='SeguroTextTitulo'>
          Seguros
        </h3>

        <p className='SeguroText'>
          Proteção para você cuidar do que importa
        </p>

        <div className='SeguroBtnContainer'>
          <button className='SeguroBtn'>
            <span className='SeguroIcon'><span className='coracao'><BiHeart/></span></span>Seguro de vida
            <p className='TrechoSeguro'>Conhecer</p>
          </button>
        </div>
      </div>

      <div className='ShoppingContainer'>
        <div>
          <button className='ShoppingBtn'>
            <h4>Shopping</h4>
          </button>

          <button className='ShoppingIcon'>
           <AiOutlineRight/>
          </button>

          <p className='ShoppingText'>Vantagens exclusivas das nossas marcas preferidas</p>
        </div>
      </div>

      <h3 className='TituloCarrossel3'> Descubra Mais </h3>

      <div className='Carrossel3'>
        <div className='Carrossel3Container'>
          <div className='SamsungPayContainer'>
            <div className='PayImage'>
            
            </div>

            <div className='PayText'>
            <div>
                <h5 className='WhatsappTextTitulo'>
                  Samsung Pay
                </h5>

                <p className='WhatsappParagrafoText'>
                  Pague usando só o seu celular ou relógio samsung.
                </p>
              </div>
            </div>
          </div>

          <div className='PortabilidadeContainer'>
            <div className='PortabilidadeImage'>
            
            </div>

            <div className='PortabilidadeText'>
            <div>
                <h5 className='WhatsappTextTitulo'>
                  Portabilidade de salário
                </h5>

                <p className='WhatsappParagrafoText'>
                  Sua liberdade financeira começa com você escolhendo onde quer...
                </p>
              </div>            
            </div>
          </div>

          <div className='ConviteContainer'>
            <div className='ConviteImage'>
            
            </div>

            <div className='ConviteText'>
            <div>
                <h5 className='WhatsappTextTitulo'>
                  Novo convite desbloqueado
                </h5>

                <p className='WhatsappParagrafoText'>
                  Traga seus amigos para o Nubank com um convite personalizado.
                </p>
              </div>            
            </div>
          </div>

          <div className='WhatsappContainer'>
            <div className='WhatsappImage'>
            
            </div>

            <div className='WhatsappText'>
              <div>
                <h5 className='WhatsappTextTitulo'>
                  Whatsapp
                </h5>

                <p className='WhatsappParagrafoText'>
                  Pagamentos seguros, rápidos e sem tarifa. A experiência Nubank
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
