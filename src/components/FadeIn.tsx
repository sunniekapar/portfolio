import React, {
  JSXElementConstructor,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

interface Props {
  delay?: number;
  transitionDuration?: number;
  wrapperTag?: JSXElementConstructor<any>;
  childTag?: JSXElementConstructor<any>;
  className?: string;
  childClassName?: string;
  visible?: boolean;
  onComplete?: () => any;
}

export default function FadeIn(props: PropsWithChildren<Props>) {
  const [maxIsVisible, setMaxIsVisible] = useState(0);
  const transitionDuration = typeof props.transitionDuration === "number" ? props.transitionDuration : 750;
  const delay = typeof props.delay === "number" ? props.delay : 250;
  const WrapperTag = props.wrapperTag || "div";
  const ChildTag = props.childTag || "div";
  const visible = typeof props.visible === "undefined" ? true : props.visible;

  useEffect(() => {
    let count = React.Children.count(props.children);
    if (!visible) {
      count = 0;
    }

    if (count == maxIsVisible) {
      // We're done updating maxVisible, notify when animation is done
      const timeout = setTimeout(() => {
        if (props.onComplete) props.onComplete();
      }, transitionDuration);
      return () => clearTimeout(timeout);
    }

    // Move maxIsVisible toward count
    const increment = count > maxIsVisible ? 1 : -1;
    const timeout = setTimeout(() => {
      setMaxIsVisible(maxIsVisible + increment);
    }, delay);
    return () => clearTimeout(timeout);
  }, [
    React.Children.count(props.children),
    delay,
    maxIsVisible,
    visible,
    transitionDuration,
  ]);

  return (
    <WrapperTag className={props.className}>
      {React.Children.map(props.children, (child, i) => {
        return (
          <ChildTag
            className={props.childClassName}
            style={{
              animationFillMode: 'backwards',
              transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms `,
              transform: maxIsVisible > i ? "none" : "translateY(2rem)",
              opacity: maxIsVisible > i ? 1 : 0,
            }}
          >
            {child}
          </ChildTag>
        );
      })}
    </WrapperTag>
  );
}
