import { randomNumber, typeOf } from '../utils';

function DataBinding({ statusMessages }) {
  // [미션] 랜덤 로직을 작성해서 임의의 상태 메시지가 표시되도록 설정합니다.
  // JavaScript 프로그래밍
  // Math.random() / Math.floor() / Math.round()

  // 리액트에서 이렇게 하는 거 아닙니다!!!
  // 전달된 props의 각 속성 타입 검사
  // if (!Array.isArray(statusMessages)) {
  //   console.warn('statusMessages가 배열이 아니야! 다시 확인해~');
  //   return null;
  // }

  const statusMessage =
    statusMessages[randomNumber(0, statusMessages.length - 1)];

  return (
    <>
      <dt>데이터 바인딩(data binding)</dt>
      <dd>
        <p>상태 메시지(status message)를 연결해 화면에 출력합니다.</p>
        <span className="status">
          {/* statusMessage 값을 화면에 표시합니다. (랜덤 표시도 도전!) */}
          {statusMessage}
        </span>
      </dd>
    </>
  );
}

export default DataBinding;

// 컴포넌트 속성 타입 검사
// Prop Types Validation

// 리액트가 제공하는 방법
// Component.propTypes

DataBinding.propTypes = {
  statusMessages(props, propName, componentName) {
    // 컴포넌트 속성의 값은?
    const propValue = props[propName];

    // 컴포넌트 속성 값의 타입은? (문자 값을 원해~)
    const propType = typeOf(propValue); // 'array'

    // 허용할 데이터 타입 이름은?
    const allowedType = 'array';

    // 컴포넌트 속성 검사 타입 수행
    if (propType !== allowedType) {
      // 오류가 있네??
      // 오류 메시지를 출력하자!
      // 오류 메시지
      // `[ componentName ] 컴포넌트 [ propName ] 속성 타입은 "[ allowedType ]" 타입이 요구되나, 실제 전달된 타입은 "[ propType ]"입니다.`
      // 오류 표시 (리액트 렌더링을 멈추고 화면에 아무 것도 렌더링 하지 않아요.)
      // 개발자가 확인
      throw new Error(
        `${componentName} 컴포넌트 ${propName} 속성 타입은 "${allowedType}" 타입이 요구되나, 실제 전달된 타입은 "${propType}"입니다.`
      );
    }

    // 아무런 오류가 없으니 패스~
  },
};
